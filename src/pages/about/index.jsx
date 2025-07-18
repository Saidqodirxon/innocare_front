import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useTranslation } from "react-i18next";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";

import "./style.scss";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-[#f9f9f9] py-10">
        <div className="w-full max-w-[1300px] mx-auto px-5">
          {/* Text + Image */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-10 w-full">
            <div className="w-full md:w-[50%]">
              <h2 className="text-4xl font-bold mb-6 leading-snug text-gray-900">
                Наша с Вами общая цель — увеличить продолжительность жизни людей
              </h2>
              <p className="text-gray-700 text-lg mb-5 leading-relaxed">
                За более 30 лет работы нашей компании мы накопили огромный опыт
                в сфере здоровья, ухода и долголетия. Мы предлагаем качественные
                продукты, проверенные временем, чтобы Вы и Ваша семья оставались
                здоровыми и счастливыми.
              </p>
              <p className="text-gray-700 text-lg mb-5 leading-relaxed">
                Наша команда обновляет ассортимент, следит за инновациями и
                предлагает только эффективные решения. Мы стремимся сделать
                сервис простым, быстрым и выгодным для Вас.
              </p>
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
          {/* Section for Snap Scroll Cards */}
          <div className="h-screen overflow-y-scroll  hide-scrollbar snap-y snap-mandatory mb-20">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-screen w-full flex items-center justify-center snap-start p-10"
              >
                <div className="bg-[#7A9B55] rounded-2xl p-8 shadow-lg text-white w-full text-center space-y-6">
                  <h3 className="text-3xl font-bold">
                    Условия покупки товаров {item}
                  </h3>
                  <ul className="list-disc list-inside text-lg space-y-3 text-left">
                    <li>Удобная оплата: наличными, картой или по безналу.</li>
                    <li>Бесплатная доставка от определённой суммы.</li>
                    <li>12-месячная гарантия на все товары.</li>
                    <li>Пробные образцы перед крупной покупкой.</li>
                    <li>Быстрая поддержка через мессенджеры и телефон.</li>
                    <li>
                      Сотрудничаем с проверенными поставщиками без посредников.
                    </li>
                  </ul>
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
