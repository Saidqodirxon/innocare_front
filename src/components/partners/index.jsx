import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Partners = () => {
  const { t, i18n } = useTranslation();
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/partners")
      .then((res) => setPartners(res.data.data || []))
      .catch((err) => console.error("Partners error:", err));
  }, []);

  const getName = (item) => {
    const lang = i18n.language;
    return item[`name_${lang}`] || item.name_uz;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-start space-y-4 mb-10">
        <span className="text-sm text-[#71914B] border border-[#71914B] rounded-full px-4 py-1">
          {t("links.partners")}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
          {t("partners.title_1")}
        </h3>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {partners.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="border border-[#71914B] rounded-xl p-4 h-[200px] flex flex-col items-center justify-center shadow-sm hover:shadow-md transition">
              <img
                src={item.image?.url}
                alt={getName(item)}
                className="h-[130px] object-contain mb-2"
              />
              <span className="text-sm text-gray-700 text-center">
                {getName(item)}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
