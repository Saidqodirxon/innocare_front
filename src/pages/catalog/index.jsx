import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Advantages from "../../components/adventages/adventages";
import AboutMain from "../../components/about-main/about";
import Contacts from "../../components/contacts/contacts";
import Portfolios from "../../components/portfolios/portfolios";
import { useTranslation } from "react-i18next";
import ProductsCatalog from "../../components/products-catalog";

const CatalogPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <ProductsCatalog />
      {/* <Advantages /> */}
      <Contacts />
      <Footer />
    </>
  );
};

export default CatalogPage;
