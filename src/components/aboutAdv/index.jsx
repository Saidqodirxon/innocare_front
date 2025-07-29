import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Users, CalendarCheck, Globe, ShieldCheck } from "lucide-react";

function AboutAdv() {
  const { i18n, t } = useTranslation();
  const [abouts, setAbouts] = useState < any > null;

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/abouts")
      .then((res) => {
        const firstItem = res.data?.data?.[0];
        if (firstItem) {
          setAbouts(firstItem);
        }
      })
      .catch((err) => console.error("Error fetching abouts:", err));
  }, []);

  const getLocalized = (item, key) => {
    if (!item) return "";
    const lang = i18n.language || "uz";
    return item[`${key}_${lang}`] || item[`${key}_uz`] || "";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/about/img1.png"
            alt={t("about_adv.img1_alt")}
            className="rounded-xl w-full h-auto object-cover shadow-md"
          />
        </div>
        <div className="text-gray-800 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            {getLocalized(abouts, "name")}
          </h2>
          <p className="text-sm leading-relaxed">
            {getLocalized(abouts, "description")}
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-gray-800 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            INNOCARE —{" "}
            <span className="text-[#71914B]">
              {i18n.language === "uz"
                ? "zamonaviy estetika yechimlari"
                : "modern aesthetic solutions"}
            </span>
          </h2>
          <p className="text-sm leading-relaxed">
            {/* Optional extra description */}
            {i18n.language === "uz"
              ? "Biz estetik tibbiyot uchun ilg‘or texnologiyalarni taklif qilamiz."
              : "We provide advanced technologies for aesthetic medicine."}
          </p>
          <p className="text-sm leading-relaxed">
            {i18n.language === "uz"
              ? "Uskunalarimiz orqali siz professional natijalarga erishishingiz mumkin."
              : "Our equipment helps you achieve professional results."}
          </p>
        </div>
        <div>
          <img
            src="/advantages/img2.png"
            alt={t("about_adv.img2_alt")}
            className="rounded-xl w-full h-auto object-cover shadow-md"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-[1300px] mx-auto px-5 mb-12">
        <h2 className="text-3xl md:text-3xl font-bold mb-10">
          {i18n.language === "uz" ? "Biz raqamlarda" : "We in numbers"}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            icon={<Users size={16} />}
            label={
              i18n.language === "uz"
                ? "Yillar davomida mijozlar"
                : "Clients over the years"
            }
            value="600+"
            desc={
              i18n.language === "uz" ? "Mijozlar soni" : "Number of clients"
            }
          />
          <StatCard
            icon={<CalendarCheck size={16} />}
            label={i18n.language === "uz" ? "Rivojlanish yo‘li" : "Since"}
            value="2021"
            desc={i18n.language === "uz" ? "Ish tajribasi" : "Experience"}
          />
          <StatCard
            icon={<Globe size={16} />}
            label={
              i18n.language === "uz"
                ? "Hamkorlik mamlakatlari"
                : "Partner countries"
            }
            value="10+"
            desc={
              i18n.language === "uz"
                ? "Xalqaro hamkorlar"
                : "International partners"
            }
          />
          <StatCard
            icon={<ShieldCheck size={16} />}
            label={
              i18n.language === "uz"
                ? "Soha mutaxassislari"
                : "Certified experts"
            }
            value="20+"
            desc={
              i18n.language === "uz"
                ? "Rasmiy sertifikatlar"
                : "Official certificates"
            }
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, desc }) {
  return (
    <div className="bg-[#7A9B55] rounded-xl text-white p-6 space-y-3 text-left">
      <div className="flex items-center space-x-2 text-sm">
        {icon}
        <span>{label}</span>
      </div>
      <p className="text-4xl font-extrabold">{value}</p>
      <p className="text-sm">{desc}</p>
    </div>
  );
}

export default AboutAdv;
