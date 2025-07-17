import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Advantages from "../../components/adventages/adventages";
import AboutMain from "../../components/about-main/about";
import Contacts from "../../components/contacts/contacts";
import ContactForm from "../../components/aboutAdv";
import { useTranslation } from "react-i18next";
import PortfoliosText from "../../components/portfolios/portfolioPage";

const ProjectsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />

      <div className="mt-20 ">
        <div className="relative h-48 md:h-64">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/contacts.png')" }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative flex items-center justify-center h-full text-white text-2xl md:text-4xl font-semibold">
            {t("portfolio.title_1")} {t("portfolio.title_2")}
          </div>
        </div>
        <PortfoliosText />
      </div>
      <Contacts />
      <Advantages />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ProjectsPage;
