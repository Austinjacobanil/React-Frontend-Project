import Shop from "../components/Shop/Shop";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: 120 }}>
        <Title subTitle="Shop" title="Browse Our Products" />
        <Shop />
      </div>
      <Footer />
    </>
  );
}
