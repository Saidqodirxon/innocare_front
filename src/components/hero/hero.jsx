import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  const { t } = useTranslation();
  const [banners, setBanners] = useState([]);
  const currentLang = localStorage.getItem("i18nextLng") || "uz";

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/banners")
      .then((res) => setBanners(res.data.data))
      .catch((err) => console.error("Banner fetch error:", err));
  }, []);

  return (
    <div className="hero-container relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        speed={1000}
        className="mySwiper"
      >
        {banners.map((banner) => {
          const title =
            currentLang === "ru"
              ? banner.name_ru
              : currentLang === "en"
              ? banner.name_en
              : banner.name_uz;

          const description =
            currentLang === "ru"
              ? banner.description_ru
              : currentLang === "en"
              ? banner.description_en
              : banner.description_uz;

          const Content = (
            <div
              className="relative h-[80dvh] bg-cover bg-center bg-no-repeat flex items-center md:justify-start justify-center px-[6vw]"
              style={{ backgroundImage: `url(${banner?.image?.url})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

              <div className="relative z-20 text-white max-w-xl md:mx-[8vw] mx-[1vw] text-center md:text-start">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
                <p className="text-md md:text-2xl font-semibold mb-6">
                  {description}
                </p>

                <div className="flex justify-center md:justify-start gap-4">
                  <a
                    href="contacts"
                    className="bg-[#71914B] text-white hover:bg-white hover:text-[#71914B] px-4 py-2 md:px-8 md:py-3 rounded-lg transition-colors duration-300"
                  >
                    {t("Boglanish")}
                  </a>
                  <a
                    href="contacts"
                    className="text-[#71914B] bg-white hover:bg-[#71914B] hover:text-white px-4 py-2 md:px-8 md:py-3 rounded-lg transition-colors duration-300"
                  >
                    {t("Qoldirish")}
                  </a>
                </div>
              </div>
            </div>
          );

          return (
            <SwiperSlide key={banner._id}>
              {banner.link ? <Link to={banner.link}>{Content}</Link> : Content}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Hero;
