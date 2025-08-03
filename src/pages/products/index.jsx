import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Contacts from "../../components/contacts/contacts";
import { FileDown, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import NotFound from "../404page/404";

const ProductsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const descriptionRef = useRef(null);
  const dropdownRef = useRef(null);
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "uz";

  const convertToEmbedUrl = (url) => {
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("watch?v=")) {
      const videoId = url.split("watch?v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  const getLangText = (field) => {
    return product?.[`${field}_${lang}`] || product?.[`${field}_ru`] || "";
  };

  const scrollToDescription = () => {
    descriptionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(`https://back.innocare.uz/products/${id}`)
      .then((res) => {
        const productData = res.data?.data;
        if (productData) {
          setProduct(productData);
          setSelectedImage(productData?.image?.[0]?.url || "");
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  const hasBuyLinks = !!(product?.link_1 || product?.link_2 || product?.link_3);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-[60vh]">
          <div className="text-[#7A9B55] text-lg animate-pulse">
            {t("loading", "Yuklanmoqda")}...
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !product) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-[1200px] mx-auto px-4 py-10 space-y-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image section */}
          <div className="flex gap-4 w-full lg:w-1/3">
            <div className="flex-1 p-2 border-2 border-[#7A9B55] rounded-xl flex items-center justify-center">
              <img
                src={selectedImage}
                alt={getLangText("name")}
                className="w-full h-full object-contain rounded-xl"
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px]">
              {product?.image?.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img.url)}
                  className={`p-2 border rounded-lg cursor-pointer ${
                    selectedImage === img.url
                      ? "border-[#7A9B55] border-2"
                      : "border-[#D9E5C2]"
                  }`}
                >
                  <img
                    src={img.url}
                    alt={`img-${idx}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info section */}
          <div className="flex flex-col w-full lg:w-2/3 space-y-4">
            <h1 className="text-2xl font-bold text-[#2c2c2c]">
              {getLangText("name")}
            </h1>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {getLangText("description")}
            </p>

            <div className="flex flex-wrap gap-4">
              {product?.file?.url && (
                <a
                  href={product.file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[185px] flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-[#7A9B55] text-white hover:bg-[#6E8D4B] transition text-sm font-medium"
                >
                  <FileDown size={18} />
                  {t("product.annotation_file", "Yuklab olish")}
                </a>
              )}
              <Link
                to={"tel:+998970322332"}
                className="w-[185px] flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-[#7A9B55] text-white hover:bg-[#6E8D4B] transition text-sm font-medium"
              >
                <Phone size={18} /> {t("Boglanish")}
              </Link>
            </div>

            <div className="flex gap-4 flex-wrap relative">
              <button
                onClick={scrollToDescription}
                className="w-[185px] px-6 py-2 rounded-full border border-[#7A9B55] text-[#7A9B55] hover:bg-[#F4F9EE] transition text-sm font-medium"
              >
                {t("Batafsil", "Batafsil")}
              </button>

              {hasBuyLinks ? (
                <div ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-[185px] px-6 py-2 rounded-full border border-[#7A9B55] text-[#7A9B55] hover:bg-[#F4F9EE] transition text-sm font-medium flex gap-2 items-center justify-center"
                  >
                    {t("BuyurtmaBerish", "Sotib olish")}
                    <span
                      className={`transition ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-[110%] left-0 w-[180px] flex flex-col border border-[#7A9B55] rounded-xl bg-white z-20">
                      {product?.link_1 && (
                        <a
                          href={product.link_1}
                          target="_blank"
                          className="px-4 py-2 text-sm text-[#2c2c2c] hover:bg-[#F4F9EE] border-b border-[#D9E5C2]"
                        >
                          Uzum
                        </a>
                      )}
                      {product?.link_2 && (
                        <a
                          href={product.link_2}
                          target="_blank"
                          className="px-4 py-2 text-sm text-[#2c2c2c] hover:bg-[#F4F9EE] border-b border-[#D9E5C2]"
                        >
                          Yandex
                        </a>
                      )}
                      {product?.link_3 && (
                        <a
                          href={product.link_3}
                          target="_blank"
                          className="px-4 py-2 text-sm text-[#2c2c2c] hover:bg-[#F4F9EE]"
                        >
                          {t("Аптека", "Apteka")}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/contacts"
                  className="w-[185px] px-6 py-2 rounded-full border border-[#7A9B55] text-[#7A9B55] hover:bg-[#F4F9EE] transition text-sm font-medium text-center"
                >
                  {t("Boglanish")}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="w-full lg:w-2/3">
          <div ref={descriptionRef} className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold text-[#7bb44d]">
              {t("product.details", "Mahsulot haqida")}
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {getLangText("about")}
            </p>
          </div>
        </div>

        {/* Video */}
        {product?.video && product?.video !== "нет" && (
          <div className="w-full aspect-video rounded-xl overflow-hidden mt-6">
            <iframe
              src={convertToEmbedUrl(product.video)}
              className="w-full h-full rounded-xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Product Video"
            ></iframe>
          </div>
        )}
      </div>
      <Contacts />
      <Footer />
    </>
  );
};

export default ProductsPage;
