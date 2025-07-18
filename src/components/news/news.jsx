import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const News = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/news?page[limit]=4")
      .then((res) => setNews(res.data.data || []))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  const getLocalizedTitle = (item) => {
    const lang = i18n.language;
    return item[`name_${lang}`] || item.name_uz;
  };

  const NewsCard = ({ item }) => (
    <div className="w-full sm:w-[300px] border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
      <img
        src={item.image?.url}
        alt={getLocalizedTitle(item)}
        className="w-full h-40 object-cover p-3 rounded-[20px]"
      />
      <div className="p-3 text-sm">
        <p className="line-clamp-2">{getLocalizedTitle(item)}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 pt-10">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Chap qism */}
        <div className="flex-1 space-y-4 text-gray-700">
          <button
            onClick={() => navigate("/projects")}
            className="w-fit text-sm text-[#71914B] rounded-full border border-[#71914B] px-4 py-1 hover:bg-[#72914B] hover:text-white transition"
          >
            {t("Новости")}
          </button>

          <h3 className="text-2xl font-semibold leading-snug">
            {t("Оборудование и решения для косметологии и дерматологии")}
          </h3>

          <button
            onClick={() => navigate("/projects")}
            className="w-fit text-white px-6 py-2 rounded-full bg-[#71914B] hover:bg-[#72914bb0] transition"
          >
            {t("Все новости")}
          </button>
        </div>

        {/* Yangiliklar blok */}
        <div className="flex-1 w-full space-y-4">
          {news.length === 1 && (
            <div className="flex justify-center">
              <NewsCard item={news[0]} />
            </div>
          )}

          {news.length === 2 && (
            <div className="flex flex-row gap-4 justify-center my-20">
              {news.map((item) => (
                <NewsCard key={item._id} item={item} />
              ))}
            </div>
          )}

          {news.length === 3 && (
            <>
              <div className="flex gap-4 justify-center">
                <NewsCard item={news[0]} />
                <NewsCard item={news[1]} />
              </div>
              <div className="flex justify-between">
                <NewsCard item={news[2]} />
              </div>
            </>
          )}

          {news.length >= 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {news.map((item) => (
                <NewsCard key={item._id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
