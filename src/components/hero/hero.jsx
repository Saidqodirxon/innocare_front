import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  const { t } = useTranslation();
  const [banners, setBanners] = useState([]);
  const currentLang = localStorage.getItem("i18nextLng") || "uz";

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/banners")
      .then((response) => {
        setBanners(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching banners:", error);
      });
  }, []);

  return (
    <div className="hero-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        {banners.map((banner) => {
          const BannerContent = (
            <div
              className="relative h-[80dvh] bg-cover bg-center bg-no-repeat flex items-center md:justify-start justify-center px-[6vw] "
              style={{ backgroundImage: `url(${banner?.image?.url})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Kontent */}
              <div className="relative md:text-start text-center text-white max-w-xl md:mx-[8vw] mx-[1vw]">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  {currentLang === "ru"
                    ? banner.name_ru
                    : currentLang === "en"
                    ? banner.name_en
                    : banner.name_uz}
                </h2>
                <p className="text-md md:text-3xl font-bold mb-6">
                  {currentLang === "ru"
                    ? banner.description_ru
                    : currentLang === "en"
                    ? banner.description_en
                    : banner.description_uz}
                </p>

                <div className="flex justify-center md:justify-start gap-4">
                  <a
                    href="contacts"
                    className="inline-block bg-[#71914B] text-white hover:bg-white hover:text-[#71914B] px-3 py-2 md:px-8 md:py-3 rounded-lg transition-colors duration-300"
                  >
                    {t("Boglanish")}
                  </a>
                  <a
                    href="contacts"
                    className="inline-block text-[#71914B] bg-white hover:text-white hover:bg-[#71914B] px-3 py-2 md:px-8 md:py-3 rounded-lg transition-colors duration-300"
                  >
                    {t("Qoldirish")}
                  </a>
                </div>
              </div>
            </div>
          );

          return (
            <SwiperSlide key={banner._id}>
              {banner.link ? (
                <Link to={banner.link}>{BannerContent}</Link>
              ) : (
                BannerContent
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Hero;
