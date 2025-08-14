import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./style.scss";

const TermsPage = () => {
  const { t } = useTranslation();

  const steps = [
    {
      img: "/about/img1.png",
      title: t("terms.flex_delivery_title"),
      desc: t("terms.flex_delivery_desc"),
    },
    {
      img: "/about/img2.png",
      title: t("terms.support_title"),
      desc: t("terms.support_desc"),
    },
    {
      img: "/about/img3.png",
      title: t("terms.quality_title"),
      desc: t("terms.quality_desc"),
    },
    {
      img: "/about/img3.png",
      title: t("terms.discounts_title"),
      desc: t("terms.discounts_desc"),
    },

    {
      img: "/about/img1.png",
      title: t("terms.logistic_title"),
      desc: t("terms.logistic_desc"),
    },
    {
      img: "/about/img2.png",
      title: t("terms.partners_title"),
      desc: t("terms.partners_desc"),
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* RESET: agar global .swiper-slide ga opacity/transform berilgan bo‘lsa, shu yerda bekor qiladi */}
      <style>{`
        .terms-swiper .swiper-slide,
        .terms-swiper .swiper-slide-prev,
        .terms-swiper .swiper-slide-next,
        .terms-swiper .swiper-slide-active {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto py-20 px-4 text-center space-y-12 terms-swiper">
        <h2 className="text-3xl font-bold">{t("terms.title")}</h2>

        <Swiper
          modules={[Autoplay]}
          effect="slide"
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          watchOverflow={true}
          className="px-2"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="w-full max-w-[400px] h-[500px] bg-white rounded-2xl shadow-md overflow-hidden mx-auto flex flex-col">
                {(index % 2 === 0 || index === 0) && (
                  <img
                    src={step.img}
                    alt={`${index + 1}-qadam — ${step.title}`}
                    className="w-full h-60 object-cover rounded-t-2xl"
                    loading="lazy"
                  />
                )}

                <span className="w-[60%] mt-4 flex self-center justify-center bg-[#6DA950] text-white px-4 py-1.5 rounded-md font-semibold text-sm">
                  {index + 1} - {t("qadam")}
                </span>

                <div className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>

                {index % 2 !== 0 && index !== 0 && (
                  <img
                    src={step.img}
                    alt={`${index + 1}-qadam — ${step.title}`}
                    className="w-full h-60 object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Contacts />
      <Footer />
    </>
  );
};

export default TermsPage;
