import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Feature from "../components/Feature/Feature";
import Title from "../components/Title/Title";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import Services from "../components/Services/Services";
// import Shop from "../components/Shop/Shop";
import ConsentBanner from "../components/ConsentBanner/ConsentBanner";
import UTMBuilder from "../components/UTMBuilder/UTMBuilder";

export default function HomePage() {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />

      <ConsentBanner />

      <div className="container">
        <Title subTitle="Our Features" title="Empowering purity in each bottle" />
        <Feature />

        <About setPlayState={setPlayState} />

        <Title subTitle="Our Services" title="Protect Your Family With Best water" />
        <Services />

        {/* <Title subTitle="Shop" title="Try Our Mini Store Experience" />
        <Shop /> */}

        <Title subTitle="Campaign Tools" title="UTM Link Builder" />
        <UTMBuilder />

        <Title subTitle="Testimonials" title="What Our Clients Says" />
        <Testimonials />

        <Contact />
        <Footer />
      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}
