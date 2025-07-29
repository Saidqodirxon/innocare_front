import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";
import "./style.scss";

const TermsPage = () => {
  const { t } = useTranslation();

  const steps = [
    {
      img: "/about/img1.png",
      title: t("terms.flex_delivery_title"),
      desc: t("terms.flex_delivery_desc"),
    },
    {
      img: "/about/img2.png",
      title: t("terms.support_title"),
      desc: t("terms.support_desc"),
    },
    {
      img: "/about/img3.png",
      title: t("terms.quality_title"),
      desc: t("terms.quality_desc"),
    },
    {
      img: "/about/img3.png",
      title: t("terms.discounts_title"),
      desc: t("terms.discounts_desc"),
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto py-20 px-4 text-center space-y-12">
        <h2 className="text-3xl font-bold">{t("terms.title")}</h2>

        <div className="overflow-x-auto scrollbar-hide p-2">
          <div className="flex space-x-6 min-w-[900px]">
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-[400px] bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0 flex flex-col relative"
              >
                {/* Image top for step 1 & 3, bottom for 2 & 4 */}
                {(index % 2 === 0 || index === 0) && (
                  <img
                    src={step.img}
                    alt={`Step ${index + 1}`}
                    className="w-full h-60 object-cover rounded-t-2xl"
                  />
                )}

                <span
                  className="w-[60%] mt-4 flex self-center justify-center bg-[#6DA950] text-white 
                px-4 py-1.5 rounded-md font-semibold text-sm"
                >
                  {index + 1} - {t("qadam")}
                </span>

                <div className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>

                {index % 2 !== 0 && index !== 0 && (
                  <img
                    src={step.img}
                    alt={`Step ${index + 1}`}
                    className="w-full h-60 object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Contacts />
      <Footer />
    </>
  );
};

export default TermsPage;
