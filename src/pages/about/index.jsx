import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useTranslation } from "react-i18next";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";
import { useEffect, useState } from "react";
import axios from "axios";

import "./style.scss";

const AboutPage = () => {
  const { i18n } = useTranslation();
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/abouts")
      .then((res) => {
        const firstItem = res.data?.data?.[0];
        if (firstItem) {
          setAbout(firstItem);
        }
      })
      .catch((err) => {
        console.error("Error fetching about data", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const getLocalized = (item, key) => {
    if (!item) return "";
    const lang = i18n.language || "ru";
    return item[`${key}_${lang}`] || item[`${key}_ru`] || "";
  };

  return (
    <>
      <Navbar />
      <Hero />

      <div className="bg-[#f9f9f9] py-10">
        <div className="w-full max-w-[1300px] mx-auto px-5">
          {/* Text + Image */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-10 w-full">
            <div className="w-full md:w-[50%]">
              {loading ? (
                <p>Загрузка...</p>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6 leading-snug text-gray-900">
                    {getLocalized(about, "name")}
                  </h2>
                  <p className="text-gray-700 text-md leading-relaxed whitespace-pre-line">
                    {getLocalized(about, "description")}
                  </p>
                </>
              )}
            </div>
            <div className="w-full md:w-[45%]">
              <img
                src="/about/img1.png"
                alt="company"
                className="w-full rounded-2xl shadow-md"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="max-w-[1300px] mx-auto px-5 mb-12">
            <h2 className="text-3xl md:text-2xl font-bold mb-10">
              О нас в цифрах
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-[#7A9B55] rounded-xl text-white p-6 space-y-3 text-left">
                <div className="flex items-center space-x-2 text-sm">
                  <i className="fa-solid fa-user-group"></i>
                  <span>Клиентов за годы работы</span>
                </div>
                <p className="text-4xl font-extrabold">600+</p>
                <p className="text-sm">Количество клиентов</p>
              </div>

              <div className="bg-[#7A9B55] rounded-xl text-white p-6 space-y-3 text-left">
                <div className="flex items-center space-x-2 text-sm">
                  <i className="fa-solid fa-briefcase"></i>
                  <span>Путь развития</span>
                </div>
                <p className="text-4xl font-extrabold">с 2021</p>
                <p className="text-sm">Опыт работы</p>
              </div>

              <div className="bg-[#7A9B55] rounded-xl text-white p-6 space-y-3 text-left">
                <div className="flex items-center space-x-2 text-sm">
                  <i className="fa-solid fa-globe"></i>
                  <span>Страны сотрудничество</span>
                </div>
                <p className="text-4xl font-extrabold">10+</p>
                <p className="text-sm">Международные Партнёры</p>
              </div>

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

          {/* Scroll cards */}
          <div className="h-screen overflow-y-scroll hide-scrollbar snap-y snap-mandatory mb-20">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-screen w-full flex items-center justify-center snap-start p-10"
              >
                <div className="bg-[#7A9B55] rounded-2xl p-8 shadow-lg text-white w-full text-start space-y-6">
                  <h3 className="text-xl font-semibold text-white">
                    Условия покупки товаров
                  </h3>

                  <div>
                    <p className="font-semibold">Удобная оплата:</p>
                    <p>
                      Возможность оплаты наличными, банковской картой или по
                      безналичному расчёту
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Доставка:</p>
                    <p>
                      Бесплатная доставка при заказе от определённой суммы
                      (уточняется при заказе).
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Гарантия на продукцию:</p>
                    <p>
                      12-месячная гарантия на все товары при соблюдении условий
                      эксплуатации.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Пробные образцы:</p>
                    <p>
                      Возможность заказа тестовых образцов для оценки качества
                      перед крупной покупкой.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Contacts />
      <Footer />
    </>
  );
};

export default AboutPage;
