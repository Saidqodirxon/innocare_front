import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";
import { useTranslation } from "react-i18next";

const NewsPage = () => {
  const { i18n } = useTranslation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/news")
      .then((res) => setNews(res.data?.data || []))
      .catch((err) => console.error("Ошибка получения новостей:", err));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {news.map((item, index) => {
          const title = item[`name_${i18n.language}`] || item.name_uz;
          const desc =
            item[`description_${i18n.language}`] || item.description_uz;
          const imageUrl = item.image?.url || "/news-placeholder.png";
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={item._id}
              className={`flex flex-col md:flex-row ${
                isReverse ? "md:flex-row-reverse" : ""
              } gap-8 items-center`}
            >
              <div className="md:w-1/2 w-full">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full max-h-[360px] object-cover rounded-xl shadow"
                />
              </div>
              <div className="md:w-1/2 w-full space-y-3">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {title}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Contacts />
      <Footer />
    </>
  );
};

export default NewsPage;
