import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import UzIcon from "../../assets/icons/uz.svg";
import RuIcon from "../../assets/icons/ru.svg";
import EnIcon from "../../assets/icons/en.svg";
import phone from "../../assets/icons/phone.svg";
import menu from "/menu.svg";
import x from "/x.svg";
import logo from "/logo.png";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const { t } = useTranslation();

  const [language, setLanguage] = useState(
    localStorage.getItem("i18nextLng") || "ru"
  );

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language);
  }, [language]);

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/categories?page[limit]=3")
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.error("Kategoriya xatosi:", err));
  }, []);

  const pages = [
    { key: "about_us", url: "/about" },
    { key: "advantages", url: "/advantages" },
    { key: "partners", url: "/partners" },
    { key: "catalog", url: "/catalog" },
    { key: "contacts", url: "/contacts" },
    { key: "news", url: "/news" },
  ];

  const languages = [
    { value: "uz", icon: UzIcon },
    { value: "ru", icon: RuIcon },
    { value: "en", icon: EnIcon },
  ];

  return (
    <>
      <div className="md:hidden">
        <button onClick={() => setOpen(true)}>
          <img src={menu} alt="menu" className="w-6 h-6" />
        </button>
      </div>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 280,
            height: "100vh",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <button onClick={() => setOpen(false)} className="self-end">
            <img src={x} alt="close" className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center mt-6">
            <Link className="brand text-xl font-bold text-[#71914B]" to="/">
              Innocare
            </Link>

            <nav className="flex flex-col gap-4 w-full text-left">
              <div>
                <button
                  onClick={() => setCatalogOpen(!catalogOpen)}
                  className="flex items-center justify-between w-full py-2 font-medium text-[#000]"
                >
                  <span>{t("links.catalog") || "Каталог"}</span>
                  {catalogOpen ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                {catalogOpen && (
                  <div className="pl-4 flex flex-col gap-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat._id}
                        to={`/category/${cat._id}`}
                        onClick={() => setOpen(false)}
                        className="text-gray-700 hover:text-[#71914B]"
                      >
                        {cat[`name_${language}`]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {pages.map((page) => (
                <Link
                  to={page.url}
                  key={page.url}
                  onClick={() => setOpen(false)}
                  className="text-[#000] font-medium hover:text-[#71914B]"
                >
                  {t(`links.${page.key}`)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center gap-4 mt-auto mb-6">
            <a
              href="tel:+998970322332"
              className="flex items-center gap-2 border px-4 py-2 rounded-md"
            >
              <img src={phone} alt="phone" className="w-5" />
              +998 (97) 032-23-32
            </a>
            <div className="flex gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.value}
                  onClick={() => setLanguage(lang.value)}
                  className={`p-1 rounded-full border ${
                    language === lang.value
                      ? "border-[#71914B]"
                      : "border-transparent"
                  }`}
                >
                  <img src={lang.icon} alt={lang.value} className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  );
}
