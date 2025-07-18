import React from "react";
import { CheckCircle, FileText, ClipboardList, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: <ClipboardList className="text-[#71914B] w-6 h-6" />,
      title: t("why.reason1.title"),
      text: t("why.reason1.text"),
    },
    {
      image: "/why/img1.png",
    },
    {
      icon: <Users className="text-[#71914B] w-6 h-6" />,
      title: t("why.reason2.title"),
      text: t("why.reason2.text"),
    },
    {
      image: "/why/img2.png",
    },
    {
      image: "/why/img3.png",
    },
    {
      icon: <CheckCircle className="text-[#71914B] w-6 h-6" />,
      title: t("why.reason3.title"),
      text: t("why.reason3.text"),
    },
    {
      image: "/why/img4.png",
    },
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

      <div className="flex flex-wrap justify-center gap-6">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col border border-[#71914B] rounded-xl bg-white shadow-sm w-full sm:w-[48%] lg:w-[23%] overflow-hidden"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={t("why.imageAlt")}
                className="w-full object-cover"
              />
            ) : (
              <div className="flex flex-col justify-center items-center gap-3 p-5 text-center flex-grow">
                {item.icon}
                <h3 className="text-md font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
