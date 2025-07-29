import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaTelegram } from "react-icons/fa";
import { PhoneCall } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#71914B] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-base">
        {/* Logo + Social */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Innocare</h2>
        </div>
        <div>
          <p className="text-sm mb-4">{t("footer.description")}</p>
          <div className="flex space-x-3">
            {[FaTelegram, FaInstagram, FaYoutube, FaFacebook].map((Icon, i) => (
              <a key={i} href="#" className="text-white hover:text-gray-200">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                {t("footer.links.partners")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("footer.links.advantages")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("footer.links.terms")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("footer.links.contacts")}
              </a>
            </li>
          </ul>
        </div>

        {/* Catalog */}
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                {t("footer.links.catalog")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("footer.links.news")}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-2">
          {/* <div>
            <p className="text-base">{t("footer.about.title")}</p>
            <p className="text-sm">{t("footer.about.schedule")}</p>
          </div> */}
          <p className="text-sm">{t("footer.legal")}</p>
          <button className="mt-2 flex items-center gap-2 text-[#71914B] bg-white px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition w-fit">
            <span className="flex items-center bg-[#71914B] text-white rounded-full p-2">
              <PhoneCall size={12} />
            </span>
            {t("footer.call_us")}
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 border-t border-white/20 pt-4 text-sm text-center md:flex md:justify-between md:items-center">
        <p>{t("footer.copyright", { year: currentYear })}</p>
        <p className="mt-2 md:mt-0">
          {t("footer.developed_by")}{" "}
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
