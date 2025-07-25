import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaTelegram } from "react-icons/fa";
import { PhoneCall } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#71914B] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-base">
        {/* Logo + Social */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Innocare</h2>
        </div>{" "}
        <div>
          <p className="text-sm mb-4">
            INNOCARE — Все товары сертифицированы, услуги лицензированы.
          </p>
          <div className="flex space-x-3">
            {[FaTelegram, FaInstagram, FaYoutube, FaFacebook].map((Icon, i) => (
              <a key={i} href="#" className="text-white hover:text-gray-200">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        {/* Навигация */}
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Наши партнеры
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Наша преймущество
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Условия сотрудничества
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        {/* Каталог */}
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Каталог
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Новости
              </a>
            </li>
          </ul>
        </div>
        {/* Контакты и кнопка */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-base">О нас</p>
            <p className="text-sm">Пн - Суб, 09:00 - 18:00</p>
          </div>
          <p className="text-sm">
            Все товары зарегистрированы, услуги лицензированы
          </p>
          <button className="mt-2 flex items-center gap-2 text-[#71914B] bg-white px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition w-fit">
            <span className="flex items-center bg-[#71914B] text-white rounded-full p-2">
              {" "}
              <PhoneCall size={12} className="" />
            </span>{" "}
            Позвонит нам
          </button>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-6 border-t border-white/20 pt-4 text-sm text-center md:flex md:justify-between md:items-center">
        <p>Копирайт: "© {currentYear} Innocare. Все права защищены."</p>
        <p className="mt-2 md:mt-0">
          Разработала команда{" "}
          <a
            href="https://supersite.uz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200"
          >
            Supersite.uz
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
