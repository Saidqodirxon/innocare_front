import React from "react";
import { useTranslation } from "react-i18next";
import { Users, CalendarCheck, Globe, ShieldCheck } from "lucide-react";

function AboutAdv() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      {/* Section 1: Text right, Image left */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/advantages/img1.png"
            alt="Косметологическое оборудование"
            className="rounded-xl w-full h-auto object-cover shadow-md"
          />
        </div>
        <div className="text-gray-800 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Наши преимущества
          </h2>
          <p className="text-sm leading-relaxed">
            Компания INNOCARE — Dermato-Cosmetological Solutions предоставляет
            профессиональные услуги по гарантийному и постгарантийному
            обслуживанию косметологического оборудования. Инженеры
            авторизованного сервисного центра INNOCARE проходят регулярное
            обучение на заводах наших партнёров в Южной Корее. Технические
            специалисты компаний-производителей, таких как Lutronic и Classys,
            обеспечивают нас постоянной информационной и технической поддержкой.
            Благодаря этому наши клиенты могут рассчитывать на качественный,
            надёжный и своевременный сервис.
          </p>
        </div>
      </div>

      {/* Section 2: Text left, Image right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-gray-800 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Знакомство с{" "}
            <span className="text-[#71914B]">аппаратной медициной</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Компания INNOCARE — Dermato-Cosmetological Solutions предлагает
            возможность ближе познакомиться с современными технологиями в
            области аппаратной эстетической медицины. Мы представляем новейшие
            разработки и методики, которые позволяют специалистам достигать
            высоких результатов в своей практике. Такой подход помогает быть в
            курсе актуальных решений и трендов в индустрии красоты и здоровья.
          </p>
        </div>
        <div>
          <img
            src="/advantages/img2.png"
            alt="Оборудование INNOCARE"
            className="rounded-xl w-full h-auto object-cover shadow-md"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-[1300px] mx-auto px-5 mb-12">
        <h2 className="text-3xl md:text-3xl font-bold mb-10">О нас в цифрах</h2>
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
    </div>
  );
}

export default AboutAdv;
