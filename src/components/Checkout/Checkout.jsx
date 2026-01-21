// import { useLocation, useNavigate } from "react-router-dom";

// function formatUSD(value) {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     maximumFractionDigits: 2,
//   }).format(value);
// }

// export default function Checkout({ track }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // cart passed from Shop via navigate("/checkout", { state: { cart, cartTotal } })
//   const cart = location.state?.cart || [];
//   const cartTotal = location.state?.cartTotal || 0;

// //   const placeOrder = () => {
// //     if (!cart.length) return;

// //     const orderId = `BASICS-${Math.floor(100000 + Math.random() * 900000)}`;

// //     // ✅ purchase event for GA4 ecommerce demos
// //     track?.("purchase", {
// //       ecommerce: {
// //         transaction_id: orderId,
// //         currency: "USD",
// //         value: cartTotal,
// //         items: cart.map((x) => ({
// //           item_id: x.id,
// //           item_name: x.name,
// //           price: x.price,
// //           quantity: x.qty,
// //         })),
// //       },
// //     });

// //     navigate("/thank-you", { state: { orderId } });
// //   };

//     const placeOrder = () => {
//   const orderId = `WC-${Math.floor(100000 + Math.random() * 900000)}`;

//   track("purchase", {
//     ecommerce: {
//       transaction_id: orderId,
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

//   navigate("/thank-you", { state: { orderId } });
// };

//   if (!cart.length) {
//     return (
//       <div className="container" style={{ paddingTop: 40 }}>
//         <h2>Checkout</h2>
//         <p>Your cart is empty. Please go back to the shop.</p>
//         <button className="btn dark-btn" onClick={() => navigate("/shop")}>
//           Back to Shop
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="container" style={{ paddingTop: 40 }}>
//       <h2>Checkout</h2>
//       <p>Review your order and complete purchase (demo flow).</p>

//       <div style={{ background: "#fff", padding: 16, borderRadius: 14, marginTop: 16 }}>
//         <h3 style={{ marginTop: 0 }}>Order Summary</h3>

//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           {cart.map((x) => (
//             <li
//               key={x.id}
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 padding: "10px 0",
//                 borderBottom: "1px solid #eee",
//               }}
//             >
//               <span>
//                 {x.name} × {x.qty}
//               </span>
//               <span>{formatUSD(x.price * x.qty)}</span>
//             </li>
//           ))}
//         </ul>

//         <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
//           <strong>Total</strong>
//           <strong>{formatUSD(cartTotal)}</strong>
//         </div>

//         <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
//           <button className="btn" onClick={() => navigate("/shop")}>
//             Continue Shopping
//           </button>
//           <button className="btn dark-btn" onClick={placeOrder}>
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useLocation, useNavigate } from "react-router-dom";
import { track } from "../../utils/analytics"; // ✅ import directly

function formatUSD(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const cart = location.state?.cart || [];
  const cartTotal = location.state?.cartTotal || 0;

  const placeOrder = () => {
    if (!cart.length) return;

    const orderId = `WC-${Math.floor(100000 + Math.random() * 900000)}`;

    track("purchase", {
      ecommerce: {
        transaction_id: orderId,
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

    navigate("/thank-you", { state: { orderId } });
  };

  if (!cart.length) {
    return (
      <div className="container" style={{ paddingTop: 40 }}>
        <h2>Checkout</h2>
        <p>Your cart is empty. Please go back to the shop.</p>
        <button className="btn dark-btn" onClick={() => navigate("/shop")}>
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: 40 }}>
      <h2>Checkout</h2>
      <p>Review your order and complete purchase (demo flow).</p>

      <div style={{ background: "#fff", padding: 16, borderRadius: 14, marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Order Summary</h3>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {cart.map((x) => (
            <li
              key={x.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span>
                {x.name} × {x.qty}
              </span>
              <span>{formatUSD(x.price * x.qty)}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
          <strong>Total</strong>
          <strong>{formatUSD(cartTotal)}</strong>
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <button className="btn" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
          <button className="btn dark-btn" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
