import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Catalog2 = () => {
  const { i18n, t } = useTranslation();
  const [products, setProducts] = useState([]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    axios
      .get("https://back.innocare.uz/products?is_view=false&is_visible=true")
      .then(({ data }) => {
        if (!isMounted) return;
        const allProducts = (data?.data || []).map((product) => ({
          ...product,
          title: i18n.language === "ru" ? product.name_ru : product.name_uz,
          img: product.image?.[0]?.url || "",
        }));
        setProducts(allProducts);
      })
      .catch(console.error);
    return () => {
      isMounted = false;
    };
  }, [i18n.language]);

  return (
    <div
      className="py-12 px-4 md:px-16 bg-white max-w-6xl mx-auto"
      id="services"
    >
      {/* RESET: global .swiper-slide’da opacity/transform bo‘lsa o‘chiradi */}
      <style>{`
        .catalog2-swiper .swiper-slide,
        .catalog2-swiper .swiper-slide-prev,
        .catalog2-swiper .swiper-slide-next,
        .catalog2-swiper .swiper-slide-active {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>

      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        {t("products.title_1")}{" "}
        <span className="text-[#71914B]">{t("products.title_2")}</span>
      </h2>

      <div className="relative max-w-[1450px] mx-auto catalog2-swiper">
        {/* Prev / Next */}
        <button
          ref={prevRef}
          aria-label="Previous"
          className="absolute z-10 left-[-20px] top-[40%] hover:bg-[#71914B] hover:text-white bg-gray-200 p-2 rounded-full cursor-pointer"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          ref={nextRef}
          aria-label="Next"
          className="absolute z-10 right-[-20px] top-[40%] hover:bg-[#71914B] hover:text-white bg-gray-200 p-2 rounded-full cursor-pointer"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          effect="slide"
          loop={true}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          watchOverflow={true}
          className="!pb-16"
        >
          {products.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="border border-[#71914B] rounded-xl flex flex-col justify-between text-center p-4 shadow hover:shadow-lg transition w-full max-w-[400px] mx-auto min-h-[550px]">
                <Link to={`/catalog/${item._id}`} className="block">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[400px] object-contain rounded-lg mb-4"
                    loading="lazy"
                  />
                </Link>

                <h3 className="text-md font-semibold text-gray-800 mb-4 line-clamp-1">
                  {item.title}
                </h3>

                <div className="flex gap-3 justify-center mt-auto">
                  <Link
                    to="/contacts"
                    className="items-center flex justify-center px-5 py-2 border border-[#71914B] text-[#71914B] rounded-full text-sm hover:bg-[#71914B] hover:text-white transition"
                  >
                    {t("Boglanish")}
                  </Link>
                  <Link
                    to={`/catalog/${item._id}`}
                    className="items-center flex justify-center px-5 py-2 bg-[#71914B] text-white rounded-full text-sm hover:bg-[#6DA950] transition"
                  >
                    {t("BuyurtmaBerish")}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Catalog2;
