import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import axios from "axios";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import menuIcon from "/menu.svg";
import xIcon from "/x.svg";
import logo from "/logo.png";
import "./navbar.scss";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);

  const languages = [
    { value: "uz", label: "UZ" },
    { value: "ru", label: "RU" },
    { value: "en", label: "EN" },
  ];

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/categories?page[limit]=3")
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.error("Kategoriyalarni olishda xatolik:", err));
  }, []);

  const handleLanguageChange = (val) => {
    i18n.changeLanguage(val);
    localStorage.setItem("i18nextLng", val);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { key: "about_us", url: "/about" },
    { key: "advantages", url: "/advantages" },
    { key: "partners", url: "/partners" },
    { key: "catalog", url: "/catalog" },
    { key: "contacts", url: "/contacts" },
    { key: "terms", url: "/terms" },
    { key: "news", url: "/news" },
  ];

  const renderMobileDrawer = () => {
    const [catalogOpen, setCatalogOpen] = useState(false);

    return (
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 280, p: 2 }}>
          <div className="flex justify-between items-center mb-6">
            <img src={logo} alt="logo" className="w-[120px]" />
            <button onClick={() => setDrawerOpen(false)}>
              <img src={xIcon} alt="close" className="w-6 h-6" />
            </button>
          </div>

          {/* 📦 Catalog accordion style */}
          <div className="mb-4">
            <button
              onClick={() => setCatalogOpen(!catalogOpen)}
              className="w-full text-left font-bold text-lg py-2 border-b border-gray-300 flex justify-between items-center"
            >
              {t("links.catalog") || "Каталог"}
              <BiChevronDown
                className={`transition-transform duration-300 ${
                  catalogOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {catalogOpen && (
              <div className="mt-2 pl-2">
                {categories.map((cat) => (
                  <Link
                    to={`/category/${cat._id}`}
                    key={cat._id}
                    onClick={() => setDrawerOpen(false)}
                    className="block text-gray-700 py-1 hover:text-[#71914B]"
                  >
                    {cat[`name_${i18n.language}`]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 🔗 Other nav links */}
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                to={item.url}
                key={item.url}
                onClick={() => setDrawerOpen(false)}
                className="block text-gray-700 py-2 hover:text-[#71914B]"
              >
                {t(`links.${item.key}`)}
              </Link>
            ))}
          </div>
        </Box>
      </Drawer>
    );
  };

  return (
    <div className="navbar">
      {/* TOPBAR */}
      <div className="topbar flex justify-between items-center px-4 py-3">
        <Link className="brand text-xl font-bold text-[#71914B]" to="/">
          Innocare
        </Link>

        {/* MOBILE: Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setDrawerOpen(true)}>
            <img src={menuIcon} alt="menu" className="w-6 h-6" />
          </button>
        </div>

        {/* DESKTOP: Contact & Social */}
        <div className="hidden md:flex gap-10 items-center">
          <div className="contact flex flex-col">
            <a href="tel:+998970322332" className="text-sm">
              +998 97 032 23 32
            </a>
            <a href="mailto:supersite.uz@gmail.com" className="text-sm">
              supersite.uz@gmail.com
            </a>
          </div>

          <div className="social-language flex items-center gap-4">
            <div className="social-icons flex gap-2">
              <a href="#">
                <FaTelegramPlane />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
            </div>

            {/* Language Dropdown */}
            <div className="language-dropdown relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1"
              >
                {languages.find((l) => l.value === i18n.language)?.label ||
                  "EN"}{" "}
                <BiChevronDown />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded shadow-md">
                  {languages.map((lang) => (
                    <div
                      key={lang.value}
                      onClick={() => handleLanguageChange(lang.value)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {lang.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MENU BAR (Desktop only) */}
      <div className="menu-bar md:flex menu-bar justify-center items-center gap-8 py-3 bg-[#71914B] text-white">
        <div className="catalog-wrapper relative group">
          <div className="catalog-btn flex items-center gap-1 cursor-pointer">
            <Menu />
            <span>{t("links.catalog") || "Каталог"}</span>
          </div>
          <div className="catalog-dropdown absolute left-0 mt-2 bg-white text-black p-2 rounded shadow-md hidden group-hover:block">
            {categories.map((cat) => (
              <Link
                to={`/category/${cat._id}`}
                key={cat._id}
                className="block px-2 py-1 hover:bg-gray-100"
              >
                {cat[`name_${i18n.language}`]}
              </Link>
            ))}
          </div>
        </div>

        <div className="menu-links flex gap-6">
          {navLinks.map((item) => (
            <Link to={item.url} key={item.url} className="hover:underline">
              {t(`links.${item.key}`)}
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE: Drawer */}
      {renderMobileDrawer()}
    </div>
  );
};

export default Navbar;
