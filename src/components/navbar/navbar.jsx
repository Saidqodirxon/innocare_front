import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { Menu, UserIcon } from "lucide-react";
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
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const langRef = useRef(null);
  const catalogRef = useRef(null);

  const languages = [
    { value: "uz", label: "O'zbekcha" },
    { value: "ru", label: "Русский" },
    { value: "en", label: "English" },
  ];

  useEffect(() => {
    axios
      .get(
        "https://back.innocare.uz/categories"
        // ?page[limit]=3
      )
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.error("Kategoriyalarni olishda xatolik:", err));
  }, []);

  const handleLanguageChange = (val) => {
    i18n.changeLanguage(val);
    localStorage.setItem("i18nextLng", val);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
      if (catalogRef.current && !catalogRef.current.contains(e.target)) {
        setIsCatalogOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { key: "home", url: "/" },
    { key: "about_us", url: "/about" },
    { key: "advantages", url: "/advantages" },
    { key: "partners", url: "/partners" },
    // { key: "catalog", url: "/catalog" },
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
            {/* <img src={logo} alt="logo" className="w-[120px]" /> */}
            <Link className="brand text-xl font-bold text-[#71914B]" to="/">
              Innocare
            </Link>
            <button onClick={() => setDrawerOpen(false)}>
              <img src={xIcon} alt="close" className="w-6 h-6" />
            </button>
          </div>

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
    <div className="navbar relative ">
      {/* TOPBAR */}
      <div className="topbar flex justify-between items-center px-4 py-6 relative z-50">
        <Link className="brand text-xl font-bold text-[#71914B]" to="/">
          Innocare
        </Link>

        <div className="md:hidden">
          <button onClick={() => setDrawerOpen(true)}>
            <img src={menuIcon} alt="menu" className="w-6 h-6" />
          </button>
        </div>

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

            <div className="language-dropdown relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1"
              >
                {languages.find((l) => l.value === i18n.language)?.label ||
                  "EN"}
                <BiChevronDown />
              </button>
              {isLangOpen && (
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
            <Link to="/profile">
              <UserIcon className="w-6 h-6 text-[#71914B] cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      {/* MENU BAR */}
      <div className="menu-bar md:flex justify-center items-center gap-8 !py-6 bg-[#71914B] text-white relative z-100">
        <div className="catalog-wrapper relative" ref={catalogRef}>
          <button
            onClick={() => setIsCatalogOpen((prev) => !prev)}
            className="flex items-center gap-2 font-semibold"
          >
            {/* {isCatalogOpen ? (
              <>
                <img src={xIcon} alt="close" className="w-5 h-5" />{" "}
                {t("links.catalog") || "Каталог"}
              </>
            ) : ( */}
            <>
              <Menu /> {t("links.catalog") || "Каталог"}
            </>
            {/* )} */}
          </button>

          {isCatalogOpen && (
            <div className="absolute left-0 mt-3 bg-white text-black p-3 rounded shadow-lg min-w-[200px] z-[200]">
              {categories.map((cat) => (
                <Link
                  to={`/catalog?categoryId=${cat._id}`}
                  key={cat._id}
                  className="block px-2 py-2 hover:bg-gray-100 rounded text-sm"
                  onClick={() => setIsCatalogOpen(false)}
                >
                  {cat[`name_${i18n.language}`]}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="menu-links flex gap-6">
          {navLinks.map((item) => (
            <Link
              to={item.url}
              key={item.url}
              className="hover:underline font-medium"
            >
              {t(`links.${item.key}`)}
            </Link>
          ))}
        </div>
      </div>

      {renderMobileDrawer()}
    </div>
  );
};

export default Navbar;
