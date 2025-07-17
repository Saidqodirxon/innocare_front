import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Catalog = () => {
  const { i18n, t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [swiperReady, setSwiperReady] = useState(false); // 👈 Swiperni keyincha init qilish uchun

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/products")
      .then((res) => {
        const allProducts = res.data.data.map((product) => ({
          ...product,
          title: i18n.language === "ru" ? product.name_ru : product.name_uz,
          img: product.image?.[0]?.url || "",
        }));
        setProducts(allProducts);
      })
      .catch((err) => console.error(err));
  }, [i18n.language]);

  // Delay navigation assignment until refs are mounted
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="py-12 px-4 md:px-16 bg-white" id="services">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        {t("why.title_1")}
        {"  "}
        <span className="text-[#71914B]">{t("why.title_2")}</span>
      </h2>

      <div className="relative">
        <div
          ref={prevRef}
          className="absolute z-10 left-[-20px] top-[40%] hover:bg-[#71914B] hover:text-white bg-gray-200 p-2 rounded-full cursor-pointer"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </div>
        <div
          ref={nextRef}
          className="absolute z-10 right-[-20px] top-[40%] hover:bg-[#71914B] hover:text-white bg-gray-200 p-2 rounded-full cursor-pointer"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </div>

        {swiperReady && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
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
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 7000 }}
            spaceBetween={30}
            slidesPerView={1}
          >
            {Array.from({ length: Math.ceil(products.length / 3) }).map(
              (_, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((item, i) => (
                        <div
                          key={i}
                          className="border border-[#71914B] rounded-xl flex flex-col items-center text-center p-4 shadow hover:shadow-lg transition"
                        >
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-[160px] h-[160px] object-contain mb-4"
                          />
                          <h3 className="text-md font-semibold text-gray-800 mb-4 line-clamp-1">
                            {item.title}
                          </h3>
                          <div className="flex gap-3">
                            <button className="px-4 py-1 border border-green-600 text-green-700 rounded-full text-sm hover:bg-green-50 transition">
                              {t("Подробнее")}
                            </button>
                            <button className="px-4 py-1 bg-green-700 text-white rounded-full text-sm hover:bg-green-800 transition">
                              {t("Заказать")}
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Catalog;
