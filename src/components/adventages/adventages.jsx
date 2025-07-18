import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Advantages = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/adventages")
      .then((res) => setData(res.data?.data || []))
      .catch((err) => console.error("Ошибка при получении преимуществ:", err));
  }, []);

  const getYouTubeEmbedUrl = (link) => {
    if (!link) return null;
    const match = link.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/
    );
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const embedUrl = data.find((item) => getYouTubeEmbedUrl(item.link))
    ? getYouTubeEmbedUrl(
        data.find((item) => getYouTubeEmbedUrl(item.link)).link
      )
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
      {data.map((item, index) => {
        const title = item[`name_${i18n.language}`] || item.name_uz;
        const desc =
          item[`description_${i18n.language}`] || item.description_uz;
        const imageUrl = item.image?.url || "/adv.png";

        // Layout direction
        let flexDirection = "md:flex-row"; // default
        if (index === 1) flexDirection = "md:flex-row-reverse";

        return (
          <div key={item._id} className="space-y-10">
            <div
              className={`flex flex-col ${flexDirection} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={imageUrl}
                  alt="Advantage"
                  className="w-full rounded-xl shadow object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {title}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
              </div>
            </div>

            {index === 1 && (
              <div className="max-w-[1300px] mx-auto px-5 mb-12">
                <h2 className="text-3xl md:text-3xl font-bold mb-10">
                  О нас в цифрах
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* 1 */}
                  <div className="bg-[#7A9B55] rounded-xl text-white p-6 space-y-3 text-left">
                    <div className="flex items-center space-x-2 text-sm">
                      <i className="fa-solid fa-user-group"></i>
                      <span>Клиентов за годы работы</span>
                    </div>
                    <p className="text-4xl font-extrabold">600+</p>
                    <p className="text-sm">Количество клиентов</p>
                  </div>

                  {/* 2 */}
                  <div className="bg-[#7A9B55] rounded-xl text-white p-6 space-y-3 text-left">
                    <div className="flex items-center space-x-2 text-sm">
                      <i className="fa-solid fa-briefcase"></i>
                      <span>Путь развития</span>
                    </div>
                    <p className="text-4xl font-extrabold">с 2021</p>
                    <p className="text-sm">Опыт работы</p>
                  </div>

                  {/* 3 */}
                  <div className="bg-[#7A9B55] rounded-xl text-white p-6 space-y-3 text-left">
                    <div className="flex items-center space-x-2 text-sm">
                      <i className="fa-solid fa-globe"></i>
                      <span>Страны сотрудничество</span>
                    </div>
                    <p className="text-4xl font-extrabold">10+</p>
                    <p className="text-sm">Международные Партнёры</p>
                  </div>

                  {/* 4 */}
                  <div className="bg-[#7A9B55] rounded-xl text-white p-6 space-y-3 text-left">
                    <div className="flex items-center space-x-2 text-sm">
                      <i className="fa-solid fa-id-card-clip"></i>
                      <span>Специалисты в этой сфере</span>
                    </div>
                    <p className="text-4xl font-extrabold">20+</p>
                    <p className="text-sm">Официальных сертификатов</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {embedUrl && (
        <div className="relative max-w-4xl mx-auto h-[400px] w-full">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src={embedUrl}
            title="Youtube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Advantages;
