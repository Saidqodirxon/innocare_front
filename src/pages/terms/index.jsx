import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";

const TermsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto py-16 px-4 text-center space-y-12">
        <h2 className="text-3xl font-bold">{t("terms.title")}</h2>

        <div className="flex flex-wrap -mx-4">
          {/* Step 1 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col relative">
              <img
                src="/about/img1.png"
                alt="Step 1"
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <span className="w-[25%] mt-4 flex self-center justify-center bg-[#6DA950] text-white px-4 py-1.5 rounded-md font-semibold text-sm">
                1 - {t("qadam")}
              </span>
              <div className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                <h3 className="text-xl font-bold">
                  {t("terms.flex_delivery_title")}
                </h3>
                <p className="text-gray-700">{t("terms.flex_delivery_desc")}</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col relative">
              <span className="w-[25%] mt-4 flex self-center justify-center bg-[#6DA950] text-white px-4 py-1.5 rounded-md font-semibold text-sm">
                2 - {t("qadam")}
              </span>
              <div className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                <h3 className="text-xl font-bold">
                  {t("terms.support_title")}
                </h3>
                <p className="text-gray-700">{t("terms.support_desc")}</p>
              </div>
              <img
                src="/about/img2.png"
                alt="Step 2"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col relative">
              <img
                src="/about/img3.png"
                alt="Step 3"
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <span className="w-[25%] mt-4 flex self-center justify-center bg-[#6DA950] text-white px-4 py-1.5 rounded-md font-semibold text-sm">
                3 - {t("qadam")}
              </span>
              <div className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                <h3 className="text-xl font-bold">
                  {t("terms.quality_title")}
                </h3>
                <p className="text-gray-700">{t("terms.quality_desc")}</p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          {/* <div className="w-full md:w-1/3 px-4 mb-8 mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col relative">
              <span className="w-[25%] mt-4 flex self-center justify-center bg-[#6DA950] text-white px-4 py-1.5 rounded-md font-semibold text-sm">
                4
              </span>
              <div className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                <h3 className="text-xl font-bold">
                  {t("terms.discounts_title")}
                </h3>
                <p className="text-gray-700">{t("terms.discounts_desc")}</p>
              </div>
              <img
                src="/about/img4.png"
                alt="Step 4"
                className="w-full h-64 object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
      <Contacts />
      <Footer />
    </>
  );
};

export default TermsPage;
