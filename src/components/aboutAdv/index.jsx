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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
        <div className="bg-[#71914B] rounded-lg p-5 flex flex-col items-center shadow">
          <Users className="w-8 h-8 mb-2" />
          <h3 className="text-xl font-bold">600+</h3>
          <p className="text-sm mt-1">Количество клиентов</p>
        </div>
        <div className="bg-[#71914B] rounded-lg p-5 flex flex-col items-center shadow">
          <CalendarCheck className="w-8 h-8 mb-2" />
          <h3 className="text-xl font-bold">с 2021</h3>
          <p className="text-sm mt-1">Путь развития</p>
        </div>
        <div className="bg-[#71914B] rounded-lg p-5 flex flex-col items-center shadow">
          <Globe className="w-8 h-8 mb-2" />
          <h3 className="text-xl font-bold">10+</h3>
          <p className="text-sm mt-1">Международные Партнеры</p>
        </div>
        <div className="bg-[#71914B] rounded-lg p-5 flex flex-col items-center shadow">
          <ShieldCheck className="w-8 h-8 mb-2" />
          <h3 className="text-xl font-bold">20+</h3>
          <p className="text-sm mt-1">Официальные специалисты</p>
        </div>
      </div>
    </div>
  );
}

export default AboutAdv;
