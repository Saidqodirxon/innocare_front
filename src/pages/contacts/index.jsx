import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useTranslation } from "react-i18next";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";

const ContactsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <Hero />
      <Contacts />
      <Footer />
    </>
  );
};

export default ContactsPage;
