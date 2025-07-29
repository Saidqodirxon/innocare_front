import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const AboutMain = () => {
  const { t, i18n } = useTranslation();
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/abouts")
      .then((res) => {
        const firstItem = res?.data?.data?.[0];
        if (firstItem) setAbout(firstItem);
      })
      .catch((err) => {
        console.error("Error fetching about data:", err);
      });
  }, []);

  const getLocalizedField = (obj, fieldBase) => {
    if (!obj) return "";
    const lang = i18n.language || "ru";
    const key = `${fieldBase}_${lang}`;
    return obj[key] || obj[`${fieldBase}_ru`] || "";
  };

  if (!about) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Matn bo‘limi */}
        <div className="md:w-1/2 space-y-4 text-gray-800">
          <button className="text-[#71914B] text-sm border border-[#71914B] rounded-full px-4 py-1">
            {t("links.contacts")}
          </button>

          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            {getLocalizedField(about, "name")}
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
            {getLocalizedField(about, "description")}
          </p>

          <button className="bg-[#71914B] hover:bg-[#72914bb0] text-white rounded-full px-6 py-2 transition">
            {t("Boglanish")}
          </button>
        </div>

        {/* Rasm bo‘limi */}
        <div className="md:w-1/2">
          <img
            src={"/about/img1.png"}
            alt="About"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
