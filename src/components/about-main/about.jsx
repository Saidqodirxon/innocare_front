import React from "react";
import { useTranslation } from "react-i18next";

const AboutMain = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Matn bo‘limi */}
        <div className="md:w-1/2 space-y-4 text-gray-800">
          <button className="text-[#71914B] text-sm border border-[#71914B] rounded-full px-4 py-1">
            {t("О нас")}
          </button>

          <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="text-black">INNOCARE — </span>
            <span className="text-[#71914B]">
              {t("оборудование и решения для косметологии и дерматологии")}
            </span>
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {t(
              "INNOCARE предлагает подборку надёжного оборудования для лазерных и косметологических процедур, а также расходных материалов и профессиональной косметики. В ассортимент входят пробирки для PRP-терапии — методики, которая широко применяется в современной косметологии и медицине. Мы стремимся сделать качественные и проверенные технологии доступными специалистам в Узбекистане. INNOCARE — это практичные решения для вашей клиники или салона."
            )}
          </p>

          <button className="bg-[#71914B] hover:bg-[#72914bb0] text-white rounded-full px-6 py-2 transition">
            {t("Подробнее")}
          </button>
        </div>

        {/* Rasm bo‘limi */}
        <div className="md:w-1/2">
          <img
            src="/about/img1.png" // 📌 Rasm manzilini keraklicha o‘zgartiring
            alt="About Image"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
