// import { Link } from "react-router-dom";

// export default function CheckoutPage() {
//   return (
//     <div className="container" style={{ paddingTop: 40 }}>
//       <h2>Checkout</h2>

//       <p>
//         Checkout your healthy routine hear!
//       </p>

//       <div style={{ marginTop: 20 }}>
//         <Link to="/thank-you" className="btn dark-btn">
//           Complete Purchase
//         </Link>
//       </div>
//     </div>
//   );
// }


import Checkout from "../components/Checkout/Checkout";

// If you already have a global track() helper, you can import it.
// Otherwise pass nothing for now.
export default function CheckoutPage() {
  return <Checkout />;
}
