import React from "react";
import {
  CheckCircle,
  FileText,
  ClipboardList,
  Users,
  BaggageClaim, // ⬅️ to‘g‘ri nom
} from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: <BaggageClaim className="text-[#71914B] w-6 h-6" />,
      title: t("why.reason1.title"),
      text: t("why.reason1.text"),
    },
    { image: "/why/img1.png" },
    {
      icon: <Users className="text-[#71914B] w-6 h-6 mt-2" />,
      title: t("why.reason2.title"),
      text: t("why.reason2.text"),
    },
    { image: "/why/img2.png" },
    { image: "/why/img3.png" },
    {
      icon: <CheckCircle className="text-[#71914B] w-6 h-6" />,
      title: t("why.reason3.title"),
      text: t("why.reason3.text"),
    },
    { image: "/why/img4.png" },
    {
      icon: <FileText className="text-[#71914B] w-6 h-6" />,
      title: t("why.reason4.title"),
      text: t("why.reason4.text"),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        {t("why.title_1")}{" "}
        <span className="text-[#71914B]">{t("why.title_2")}</span>
      </h2>

      {/* Mobil: 2 ustun, Desktop: 4 ustun */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-6">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col border border-[#71914B] rounded-xl bg-white shadow-sm overflow-hidden md:w-full md:h-full w-[200px] h-[200px]"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={t("why.imageAlt")}
                className="w-full h-full object-cover" /* barqaror balandlik */
              />
            ) : (
              <div className="flex flex-col items-start gap-4 p-5">
                {item.icon}
                <h3 className="text-[16px]  md:text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-[10px] md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
