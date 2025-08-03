import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";

const Advantages = () => {
  const { i18n, t } = useTranslation();
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
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16 space-y-24">
      {data.map((item, index) => {
        const title = item[`name_${i18n.language}`] || item.name_uz;
        const desc =
          item[`description_${i18n.language}`] || item.description_uz;
        const imageUrl = item.image?.url || "/adv.png";

        const flexDirection =
          index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row";

        return (
          <div key={item._id} className="space-y-10">
            <div
              className={`flex flex-col ${flexDirection} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={imageUrl}
                  alt="Advantage"
                  className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {title}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>

            {/* Stats block */}
            {index === 1 && (
              <div className="w-full mt-10 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                  {t("О нас в цифрах")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: "fa-user-group",
                      title: "Клиентов за годы работы",
                      value: "600+",
                      sub: "Количество клиентов",
                    },
                    {
                      icon: "fa-briefcase",
                      title: "Путь развития",
                      value: "с 2021",
                      sub: "Опыт работы",
                    },
                    {
                      icon: "fa-globe",
                      title: "Страны сотрудничество",
                      value: "10+",
                      sub: "Международные Партнёры",
                    },
                    {
                      icon: "fa-id-card-clip",
                      title: "Специалисты в этой сфере",
                      value: "20+",
                      sub: "Официальных сертификатов",
                    },
                  ].map((stat, idx) => {
                    const match = stat.value.match(/^(\D*)(\d+)(\+?)$/);
                    const prefix = match?.[1] || "";
                    const number = match?.[2] || "";
                    const suffix = match?.[3] || "";

                    const isCountable =
                      number && !(number.length === 4 && prefix.includes("20"));

                    return (
                      <div
                        key={idx}
                        className="bg-[#7A9B55] rounded-xl text-white p-6 space-y-3 text-left"
                      >
                        <div className="flex items-center space-x-2 text-sm">
                          <i className={`fa-solid ${stat.icon}`}></i>
                          <span>{stat.title}</span>
                        </div>

                        <p className="text-3xl md:text-4xl font-extrabold">
                          {(() => {
                            const match = stat.value.match(/^(\d+)(\+?)$/);
                            if (match) {
                              const [, number, plus] = match;
                              const year = parseInt(number);
                              const now = new Date().getFullYear();
                              if (year >= 2000 && year <= now + 1) {
                                return stat.value;
                              }
                              return (
                                <>
                                  <CountUp
                                    end={parseInt(number)}
                                    duration={10}
                                  />
                                  {plus}
                                </>
                              );
                            }
                            return stat.value;
                          })()}
                        </p>
                        <p className="text-sm">{stat.sub}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* YouTube Video */}
      {embedUrl && (
        <div className="w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
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
