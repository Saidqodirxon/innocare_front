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
    let isMounted = true;
    axios
      .get("https://back.innocare.uz/partners")
      .then(({ data }) => {
        if (!isMounted) return;
        setPartners(data?.data || []);
      })
      .catch((err) => console.error("Partners error:", err));
    return () => {
      isMounted = false;
    };
  }, []);

  const getName = (item) => {
    const lang = i18n.language;
    // mos kalit topilmasa uz -> ru -> en tartibida fallback
    return (
      item[`name_${lang}`] || item.name_uz || item.name_ru || item.name_en || ""
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 partners-swiper">
      {/* RESET: agar global .swiper-slide ga opacity/transform berilgan bo‘lsa, o‘chiradi */}
      <style>{`
        .partners-swiper .swiper-slide,
        .partners-swiper .swiper-slide-prev,
        .partners-swiper .swiper-slide-next,
        .partners-swiper .swiper-slide-active {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>

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
        watchOverflow={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {partners.map((item) => (
          <SwiperSlide key={item._id || item.id}>
            <div className="border border-[#71914B] rounded-xl p-4 h-[200px] flex flex-col items-center justify-center shadow-sm hover:shadow-md transition">
              <img
                src={item.image?.url}
                alt={getName(item)}
                className="h-[130px] object-contain mb-2"
                loading="lazy"
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
