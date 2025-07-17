import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useTranslation } from "react-i18next";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";
import AboutAdv from "../../components/aboutAdv";
import Advantages from "../../components/adventages/adventages";

const AdvantagesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <Hero />
      {/* <AboutAdv /> */}
      <Advantages />
      <Contacts />
      <Footer />
    </>
  );
};

export default AdvantagesPage;
