// import { useState } from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Hero from './components/Hero/Hero'
// import Feature from './components/Feature/Feature'
// import Title from './components/Title/Title'
// import About from './components/About/About'
// import Testimonials from './components/Testimonials/Testimonials'
// import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'
// import VideoPlayer from './components/VideoPlayer/VideoPlayer'
// import Services from './components/Services/Services'
// import Shop from "./components/Shop/Shop";
// // import Address from './components/Address/Address'
// // import Slides from './components/Slides/Slides'
// // import Connection from './components/Connection/Connection'

// const App = () => {

//   const[playState, setPlayState] = useState(false);
//   return (
//     <div>
//       <Navbar></Navbar>
//       <Hero/>
//       <div className="container">
//         <Title subTitle='Our Features' title='Empowering purity in each bottle'/>
//         <Feature/>
//         <About setPlayState={setPlayState}></About>
//         <Title subTitle='Our Services' title='Protect Your Family With Best water'/>
//         <Services></Services>
//         <Title subTitle="Shop" title="Try Our Mini Store Experience" />
//         <Shop />
//         {/* <Title subTitle='Contact Us' title='Inspiring deneration'/> */}
//         <Title subTitle='Testimonials' title='What Our Clients Says'/>
//         <Testimonials></Testimonials>
//         {/* <Title subTitle='New Connection' title='Get Your Bottles Today Itself'/> */}
//         {/* <Connection/>    */}
//         <Contact></Contact>
        
//         {/* <Slides/>  */}
//         {/* <Address></Address>  */}
//         <Footer/>
//       </div>
//       {/* <div className="container">
//         <Title
//           subTitle="Shop"
//           title="Try Our Mini Store Experience"
//         />
//         <Shop />
//       </div> */}
//       <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
//     </div>
//   )
// }

// export default App

// import { Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import Thankyou from "./pages/Thankyou";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/thank-you" element={<Thankyou />} />
//     </Routes>
//   );
// };

// export default App;


import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";
import Thankyou from "./pages/Thankyou";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/thank-you" element={<Thankyou />} />
    </Routes>
  );
};

export default App;
