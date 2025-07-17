import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useTranslation } from "react-i18next";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-[#f9f9f9] py-10">
        <div className="w-full max-w-[1300px] mx-auto px-5 rounded-3xl p-8">
          {/* Text + Image */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-10 w-full">
            {/* Text */}
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
            {/* Image */}
            <div className="w-full md:w-[45%]">
              <img
                src="/about/img1.png"
                alt="company"
                className="w-full rounded-2xl shadow-md"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
            <div className="bg-[#F0F7EB] p-6 rounded-xl shadow space-y-2">
              <p className="text-4xl font-extrabold text-[#71914B]">600+</p>
              <p className="text-base text-gray-700 font-medium">
                Клиентов ежемесячно
              </p>
            </div>
            <div className="bg-[#F0F7EB] p-6 rounded-xl shadow space-y-2">
              <p className="text-4xl font-extrabold text-[#71914B]">с 2021</p>
              <p className="text-base text-gray-700 font-medium">
                Год основания компании
              </p>
            </div>
            <div className="bg-[#F0F7EB] p-6 rounded-xl shadow space-y-2">
              <p className="text-4xl font-extrabold text-[#71914B]">10+</p>
              <p className="text-base text-gray-700 font-medium">
                Уникальных процедур
              </p>
            </div>
            <div className="bg-[#F0F7EB] p-6 rounded-xl shadow space-y-2">
              <p className="text-4xl font-extrabold text-[#71914B]">20+</p>
              <p className="text-base text-gray-700 font-medium">
                Опытных специалистов
              </p>
            </div>
          </div>

          {/* Sticky Cards */}
          <div className="flex flex-col gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-[#b9ce9b] rounded-2xl p-8 shadow-lg sticky text-white"
                style={{
                  top: `${item * 100}px`,
                  zIndex: 100 - item,
                }}
              >
                <h3 className="text-3xl font-bold mb-5">
                  Условия покупки товаров
                </h3>
                <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
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
