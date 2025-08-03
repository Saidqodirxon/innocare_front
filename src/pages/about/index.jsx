import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useTranslation } from "react-i18next";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";

import "./style.scss";

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const [abouts, setAbouts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const lastScrollTop = useRef(0);

  const conditions = [
    {
      title: "abouts.cooperation.title",
      items: [
        ["abouts.cooperation.termTitle", "abouts.cooperation.termDesc"],
        ["abouts.cooperation.supportTitle", "abouts.cooperation.supportDesc"],
        ["abouts.cooperation.qualityTitle", "abouts.cooperation.qualityDesc"],
        ["abouts.cooperation.discountTitle", "abouts.cooperation.discountDesc"],
      ],
    },
    {
      title: "abouts.innocare.title",
      items: [
        ["abouts.innocare.trainingTitle", "abouts.innocare.trainingDesc"],
        ["abouts.innocare.programTitle", "abouts.innocare.programDesc"],
        ["abouts.innocare.updateTitle", "abouts.innocare.updateDesc"],
        ["abouts.innocare.managerTitle", "abouts.innocare.managerDesc"],
      ],
    },
    {
      title: "abouts.purchase.title",
      items: [
        ["abouts.purchase.paymentTitle", "abouts.purchase.paymentDesc"],
        ["abouts.purchase.deliveryTitle", "abouts.purchase.deliveryDesc"],
        ["abouts.purchase.guaranteeTitle", "abouts.purchase.guaranteeDesc"],
        ["abouts.purchase.samplesTitle", "abouts.purchase.samplesDesc"],
      ],
    },
  ];

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/abouts")
      .then((res) => {
        const first = res.data?.data?.[0];
        if (first) setAbouts(first);
      })
      .catch((err) => {
        console.error("Error fetching abouts:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible =
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2;

          if (isVisible) {
            if (scrollTop > lastScrollTop.current) {
              setActiveIndex(index);
            } else if (scrollTop < lastScrollTop.current) {
              setActiveIndex(index);
            }
          }
        }
      });

      lastScrollTop.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        }
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const getLocalized = (item, key) => {
    if (!item) return "";
    const lang = i18n.language || "ru";
    return item[`${key}_${lang}`] || item[`${key}_ru`] || "";
  };

  const statList = abouts
    ? [
        {
          icon: "fa-user-group",
          title: "abouts.clientsTitle",
          value: abouts.clients, // Example: "600+"
          label: "abouts.clientsLabel",
        },
        {
          icon: "fa-briefcase",
          title: "abouts.experienceTitle",
          value: abouts.experience, // Example: "2021"
          label: "abouts.experienceLabel",
        },
        {
          icon: "fa-globe",
          title: "abouts.countriesTitle",
          value: abouts.countries,
          label: "abouts.countriesLabel",
        },
        {
          icon: "fa-id-card-clip",
          title: "abouts.specialistsTitle",
          value: abouts.specialists,
          label: "abouts.specialistsLabel",
        },
      ]
    : [];

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
                <p>{t("loading")}</p>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6 leading-snug text-gray-900">
                    {getLocalized(abouts, "name")}
                  </h2>
                  <p className="text-gray-700 text-md leading-relaxed whitespace-pre-line">
                    {getLocalized(abouts, "description")}
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
              {t("abouts.statsTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "fa-user-group",
                  title: "abouts.clientsTitle",
                  value: "600+",
                  label: "abouts.clientsLabel",
                },
                {
                  icon: "fa-briefcase",
                  title: "abouts.experienceTitle",
                  value: "2021", // bu animatsiyasiz qoladi
                  label: "abouts.experienceLabel",
                },
                {
                  icon: "fa-globe",
                  title: "abouts.countriesTitle",
                  value: "10+",
                  label: "abouts.countriesLabel",
                },
                {
                  icon: "fa-id-card-clip",
                  title: "abouts.specialistsTitle",
                  value: "20+",
                  label: "abouts.specialistsLabel",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#7A9B55] rounded-xl text-white p-6 space-y-3 text-left"
                >
                  <div className="flex items-center space-x-2 text-sm">
                    <i className={`fa-solid ${stat.icon}`}></i>
                    <span>{t(stat.title)}</span>
                  </div>

                  <p className="text-4xl font-extrabold">
                    {(() => {
                      // Raqam + optional "+" belgisi (masalan, "600+")
                      const match = stat.value.match(/^(\d+)(\+?)$/);

                      // Agar "+" bo‘lsa yoki bu oddiy raqam bo‘lsa, lekin yil emas
                      if (match) {
                        const [, number, plus] = match;

                        // Yil bo‘lsa (masalan, 2021 yoki 2024), animatsiyalamasdan chiqaramiz
                        const asNumber = parseInt(number);
                        const currentYear = new Date().getFullYear();
                        if (asNumber >= 2000 && asNumber <= currentYear + 1) {
                          return stat.value;
                        }

                        // Aks holda, animatsiya bilan ko‘rsatamiz
                        return (
                          <>
                            <CountUp end={asNumber} duration={10} />
                            {plus}
                          </>
                        );
                      }

                      // Agar mos kelmasa (matn bo‘lsa) — to‘g‘ridan-to‘g‘ri ko‘rsatamiz
                      return stat.value;
                    })()}
                  </p>

                  <p className="text-sm">{t(stat.label)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Scroll Cards */}
          <div className="relative h-[290vh] max-w-[1300px]">
            {conditions.map((section, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  data-index={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="sticky top-0 h-screen flex items-center justify-center"
                  style={{ zIndex: 10 + index }}
                >
                  <div
                    className={` rounded-2xl p-6 md:p-10 max-w-6xl w-full mx-4 space-y-6 transition-all duration-700 ease-in-out text-white ${
                      isActive
                        ? "scale-105 opacity-100 bg-[#7A9B55] shadow-2xl"
                        : "scale-95 opacity-50 bg-[#6a8750] shadow-md"
                    }`}
                  >
                    <h3 className="text-2xl font-bold">{t(section.title)}</h3>
                    {section.items.map(([titleKey, descKey]) => (
                      <div key={titleKey}>
                        <p className="font-semibold">{t(titleKey)}</p>
                        <p>{t(descKey)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Contacts />
      <Footer />
    </>
  );
};

export default AboutPage;
