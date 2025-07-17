import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";

import Adventages from "../../components/adventages/adventages";
import Portfolios from "../../components/portfolios/portfolios";

import "./main.scss";
import Partners from "../../components/partners";
import WhyChooseUs from "../../components/whychoose/why";
import AboutMain from "../../components/about-main/about";
import Testimonials from "../../components/otziv";
import ProductCarousel from "../../components/catalog/catalog";
import News from "../../components/news/news";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="bg">
          <Navbar />
          <Hero />
        </div>
      </div>
      <WhyChooseUs />
      <ProductCarousel />
      <News />
      <AboutMain />
      <Partners />
      <Contacts />
      <Footer />
    </>
  );
};

export default Main;
