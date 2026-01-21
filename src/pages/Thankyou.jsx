// import { Link } from "react-router-dom";

// export default function Thankyou() {
//   return (
//     <div className="container" style={{ paddingTop: 40 }}>
//       <h2>Purchase Successful ✅</h2>
//       <p>
//         This page exists so we can demonstrate funnels, conversions,
//         and path exploration in analytics.
//       </p>

//       <Link to="/" className="btn dark-btn">
//         Back to Home
//       </Link>
//     </div>
//   );
// }


// import { Link, useLocation } from "react-router-dom";

// export default function ThankYou() {
//   const location = useLocation();
//   const orderId = location.state?.orderId;

//   return (
//     <div className="container" style={{ paddingTop: 40 }}>
//       <h2>Purchase Successful ✅</h2>
//       {orderId && <p><strong>Order ID:</strong> {orderId}</p>}

//       {/* <p>This page exists for funnels, conversions, and path exploration demos.</p> */}

//       <Link to="/" className="btn dark-btn">
//         Back to Home
//       </Link>
//     </div>
//   );
// }


import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { track } from "../utils/analytics"; // ✅ adjust path if needed

export default function ThankYou() {
  const location = useLocation();
  const orderId = location.state?.orderId;

  useEffect(() => {
    // ✅ Helpful for funnels + path exploration demos
    track("thank_you_view", {
      order_id: orderId || "unknown",
      page: "/thank-you",
    });
  }, [orderId]);

  return (
    <div className="container" style={{ paddingTop: 40 }}>
      <h2>Purchase Successful ✅</h2>

      {orderId ? (
        <p>
          <strong>Order ID:</strong> {orderId}
        </p>
      ) : (
        <p style={{ opacity: 0.8 }}>
          Order confirmed.
        </p>
      )}

      <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
        <Link to="/shop" className="btn">
          Back to Shop
        </Link>

        <Link to="/" className="btn dark-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
