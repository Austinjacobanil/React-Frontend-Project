import { useMemo, useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import { track } from "../../utils/analytics";
import { useNavigate } from "react-router-dom";


import mineral1L from "../../assets/mineral-1l.jpg";
import sparkling500 from "../../assets/sparkling-500.jpg";
import alkaline1L from "../../assets/alkaline-1l.jpg";
import familyPack from "../../assets/family-pack.jpg";


const PRODUCTS = [
  {
    id: "mineral-1l",
    name: "Mineral Water (1L)",
    price: 30,
    category: "Water",
    description: "Clean, refreshing mineral water for daily hydration.",
    image: mineral1L,
  },
  {
    id: "sparkling-500",
    name: "Sparkling Water (500ml)",
    price: 40,
    category: "Sparkling",
    description: "Lightly carbonated water with a crisp finish.",
    image: sparkling500,
  },
  {
    id: "alkaline-1l",
    name: "Alkaline Water (1L)",
    price: 55,
    category: "Wellness",
    description: "Smooth alkaline water for an active lifestyle.",
    image: alkaline1L,
  },
  {
    id: "family-pack",
    name: "Family Pack (6 x 1L)",
    price: 160,
    category: "Bundle",
    description: "Convenient family pack for home and office.",
    image: familyPack,
  },
];


// function formatINR(value) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

function formatUSD(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}


export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  // const [step, setStep] = useState("shop"); // "shop" | "checkout" | "success"
  // const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  // cart items: { id, name, price, qty }
  const [cart, setCart] = useState([]);

  useEffect(() => {
  track("view_item_list", {
    ecommerce: {
      item_list_name: "Mini Shop",
      items: PRODUCTS.map((p) => ({
        item_id: p.id,
        item_name: p.name,
        item_category: p.category,
        price: p.price,
      })),
    },
  });
}, []);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  const addToCart = (product) => {
    track("add_to_cart", {
      ecommerce: {
        currency: "USD",
        value: product.price,
        items: [
          {
            item_id: product.id,
            item_name: product.name,
            item_category: product.category,
            price: product.price,
            quantity: 1,
          },
        ],
      },
    });

    setCart((prev) => {
      const existing = prev.find((x) => x.id === product.id);
      if (existing) {
        return prev.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });

    setCartOpen(true);

    // (Optional later for GA4/GTM) You can fire a custom event here:
    // window.dataLayer?.push({ event: "add_to_cart", ecommerce: { ... } });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: x.qty + delta } : x))
        .filter((x) => x.qty > 0)
    );
  };

  const clearCart = () => setCart([]);

  // const goCheckout = () => {
  //   track("begin_checkout", {
  //     ecommerce: {
  //       currency: "USD",
  //       value: cartTotal,
  //       items: cart.map((x) => ({
  //         item_id: x.id,
  //         item_name: x.name,
  //         price: x.price,
  //         quantity: x.qty,
  //       })),
  //     },
  //   });
  //   setCartOpen(false);
  //   setStep("checkout");
  //   // (Optional later) dataLayer event: begin_checkout
  // };

  // const navigate = useNavigate();

  const goCheckout = () => {
    track("begin_checkout", {
      ecommerce: {
        currency: "USD",
        value: cartTotal,
        items: cart.map((x) => ({
          item_id: x.id,
          item_name: x.name,
          price: x.price,
          quantity: x.qty,
        })),
      },
    });

    setCartOpen(false);

    // ✅ navigate to real page for funnels + path exploration
    navigate("/checkout", {
      state: { cart, cartTotal },
    });
  };


  // const placeOrder = () => {
  //   const newOrderId = `WC-${Math.floor(100000 + Math.random() * 900000)}`;
  //   setOrderId(newOrderId);
  //   setStep("success");
  //   navigate("/thank-you");
    
  //   // (Optional later) dataLayer event: purchase
  //   // window.dataLayer?.push({ event: "purchase", ecommerce: { transaction_id: newOrderId, value: cartTotal, items: cart } });

  //   clearCart();
  // };

  return (
    <section className="shop" id="shop">
      {/* Header */}
      <div className="shop-header">
        <div>
          <h2 className="shop-title">Shop</h2>
          <p className="shop-subtitle">Browse products and try a simple checkout flow.</p>
        </div>

        <button className="btn" onClick={() => setCartOpen(true)}>
          Cart ({cartCount})
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="product-grid">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} className="product-img" />

            <div className="product-meta">
              <p className="product-category">{p.category}</p>
              <h3 className="product-name">{p.name}</h3>
              <p className="product-price">{formatUSD(p.price)}</p>
            </div>

            <div className="product-actions">
              <button
                className="btn"
                onClick={() => {
                  track("view_item", {
                    ecommerce: {
                      items: [
                        {
                          item_id: p.id,
                          item_name: p.name,
                          item_category: p.category,
                          price: p.price,
                        },
                      ],
                    },
                  });
                  setSelectedProduct(p);
                }}
              >
                View
              </button>

              <button className="btn dark-btn" onClick={() => addToCart(p)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="shop-note">Drink Healthy, Stay Healthy, Feel Healthy!</p>


      {/* MAIN CONTENT */}
      {/* {step === "shop" && (
        <>
          <div className="product-grid">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="product-card">
                <img src={p.image} alt={p.name} className="product-img" />

                <div className="product-meta">
                  <p className="product-category">{p.category}</p>
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-price">{formatUSD(p.price)}</p>
                </div>

                <div className="product-actions">
                  {/* <button className="btn" onClick={() => setSelectedProduct(p)}>
                    View
                  </button> */}
                  {/* <button
                    className="btn"
                    onClick={() => {
                      track("view_item", {
                        ecommerce: {
                          items: [
                            {
                              item_id: p.id,
                              item_name: p.name,
                              item_category: p.category,
                              price: p.price,
                            },
                          ],
                        },
                      });
                      setSelectedProduct(p);
                    }}
                  >
                    View
                  </button>

                  <button className="btn dark-btn" onClick={() => addToCart(p)}>
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="shop-note">
            Drink Healthy, Stay Healthy, Feel Healthy!
          </p>
        </>
      )} */}

      {/* {step === "checkout" && (
        <div className="checkout">
          <h3>Checkout</h3>

          {cart.length === 0 ? (
            <>
              <p>Your cart is empty. Go back to shop.</p>
              <button className="btn" onClick={() => setStep("shop")}>
                Back to Shop
              </button>
            </>
          ) : (
            <>
              <div className="checkout-card">
                <h4>Order Summary</h4>
                <ul className="checkout-list">
                  {cart.map((x) => (
                    <li key={x.id} className="checkout-item">
                      <span>
                        {x.name} × {x.qty}
                      </span>
                      <span>{formatUSD(x.price * x.qty)}</span>
                    </li>
                  ))}
                </ul> */}

                {/* <div className="checkout-total">
                  <strong>Total</strong>
                  <strong>{formatUSD(cartTotal)}</strong>
                </div>
              </div>

              <div className="checkout-actions">
                <button className="btn" onClick={() => setStep("shop")}>
                  Continue Shopping
                </button>
                <button className="btn dark-btn" onClick={placeOrder}>
                  Place Order
                </button>
              </div>
            </>
          )}
        </div>
      )} */}

      {/* {step === "success" && (
        <div className="success">
          <h3>Purchase Successful ✅</h3>
          <p>Your order has been placed successfully.</p>
          <p>
            <strong>Order ID:</strong> {orderId}
          </p>
          <button className="btn dark-btn" onClick={() => setStep("shop")}>
            Back to Shop
          </button>
        </div>
      )} */}

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-img" />

            <h3>{selectedProduct.name}</h3>
            <p className="modal-price">{formatUSD(selectedProduct.price)}</p>
            <p className="modal-desc">{selectedProduct.description}</p>

            <div className="modal-actions">
              <button className="btn" onClick={() => setSelectedProduct(null)}>
                Close
              </button>
              <button
                className="btn dark-btn"
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      <div className={`cart-drawer ${cartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="btn" onClick={() => setCartOpen(false)}>
            Close
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="cart-empty">Cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((x) => (
                <li key={x.id} className="cart-item">
                  <div>
                    <p className="cart-name">{x.name}</p>
                    <p className="cart-price">{formatUSD(x.price)}</p>
                  </div>

                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => updateQty(x.id, -1)}>
                      -
                    </button>
                    <span className="qty">{x.qty}</span>
                    <button className="qty-btn" onClick={() => updateQty(x.id, 1)}>
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <strong>Total</strong>
                <strong>{formatUSD(cartTotal)}</strong>
              </div>

              <button className="btn dark-btn" onClick={goCheckout}>
                Checkout
              </button>

              <button className="btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>

      {/* Drawer overlay */}
      {cartOpen && <div className="drawer-overlay" onClick={() => setCartOpen(false)} />}
    </section>
  );
}
