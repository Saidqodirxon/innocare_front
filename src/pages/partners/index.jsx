import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";
import Footer from "../../components/footer/footer";
import { useTranslation } from "react-i18next";

const PartnersPage = () => {
  const [partners, setPartners] = useState([]);
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "uz";

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/partners")
      .then((res) => setPartners(res.data?.data || []))
      .catch((err) => console.error("Ошибка получения партнеров:", err));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-[1200px] mx-auto px-4 py-10 space-y-8">
        <h2 className="text-3xl font-bold mb-6">{t("partners.title_1")}</h2>
        <p className="text-gray-700 mb-8">
          {t(
            "partners.description",
            "Dermatologiya, trixologiya va go‘zallik sohasida yetakchi xalqaro kompaniyalar bilan hamkorlik qilamiz."
          )}
        </p>

        {/* Qisqa ro‘yxat */}
        {/* <div className="space-y-2">
          <h3 className="text-2xl font-bold mb-4">
            {t("partners.list_title", "Hamkorlar ro‘yxati:")}
          </h3>
          <ul className="list-decimal list-inside text-gray-800 space-y-1">
            {partners.map((item) => (
              <li key={item._id}>
                <span className="font-medium">{item[`name_${lang}`]}</span>{" "}
                {item[`short_description_${lang}`] || ""}
              </li>
            ))}
          </ul>
        </div> */}

        {/* To‘liq ma’lumotlar */}
        <div className="space-y-8 pt-10">
          {partners.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl"
            >
              <div className="md:w-1/3 flex items-center justify-center">
                <img
                  src={item.image?.url}
                  alt={item[`name_${lang}`]}
                  className="w-full h-40 object-contain shadow p-6 rounded-xl"
                />
              </div>
              <div className="md:w-2/3 space-y-3">
                <h3 className="text-xl font-bold">{item[`name_${lang}`]}</h3>
                <p className="text-gray-700">{item[`description_${lang}`]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contacts />
      <Footer />
    </>
  );
};

export default PartnersPage;
