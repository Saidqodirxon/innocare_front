import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Catalog = () => {
  const { i18n, t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [swiperReady, setSwiperReady] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/products?is_view=true&is_visible=true")
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

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="py-12 px-4 md:px-16 bg-white" id="services">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        {t("products.title_1")}{" "}
        <span className="text-[#71914B]">{t("products.title_2")}</span>
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
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {products.map((item, i) => (
              <SwiperSlide key={i}>
                <Link
                  to={`/catalog/${item._id}`}
                  className="border border-[#71914B] rounded-xl flex flex-col justify-between text-center p-4 shadow hover:shadow-lg transition w-full max-w-[400px] mx-auto min-h-[550px]"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[400px] object-contain rounded-lg mb-4"
                  />
                  <h3 className="text-md font-semibold text-gray-800 mb-4 line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex gap-3 justify-center mt-auto">
                    <Link
                      to={`/contacts`}
                      className="px-5 py-2 border border-[#71914B] text-[#71914B] rounded-full text-sm hover:bg-[#71914B] hover:text-white transition"
                    >
                      {t("Boglanish")}
                    </Link>
                    <Link
                      to={`/catalog/${item._id}`}
                      className="px-5 py-2 bg-[#71914B] text-white rounded-full text-sm hover:bg-[#6DA950] transition"
                    >
                      {t("BuyurtmaBerish")}
                    </Link>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Catalog;
