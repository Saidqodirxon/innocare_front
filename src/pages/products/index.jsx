import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Contacts from "../../components/contacts/contacts";
import {
  Download,
  FileDown,
  FileDownIcon,
  MessageCircle,
  Phone,
  PhoneCall,
  PhoneCallIcon,
} from "lucide-react";
import { PiDownloadFill } from "react-icons/pi";

const ProductsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [lang, setLang] = useState("ru");
  const [selectedImage, setSelectedImage] = useState("");
  const descriptionRef = useRef(null);
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  function convertToEmbedUrl(url) {
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes("watch?v=")) {
      const videoId = url.split("watch?v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url; // Fallback, maybe already embed link or not YouTube
  }

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
    const localLang = localStorage.getItem("i18nextLng");
    if (["uz", "ru", "en"].includes(localLang)) setLang(localLang);

    axios.get(`https://back.innocare.uz/products/${id}`).then((res) => {
      const productData = res.data?.data;
      setProduct(productData);
      setSelectedImage(productData?.image?.[0]?.url || "");
    });
  }, [id]);

  const getLangText = (field) => {
    return product?.[`${field}_${lang}`] || product?.[`${field}_ru`] || "";
  };

  const scrollToDescription = () => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="max-w-[1200px] mx-auto px-4 py-10 text-center">
          <p className="text-xl">Загрузка...</p>
        </div>
        <Contacts />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-[1200px] mx-auto px-4 py-10 space-y-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Block */}
          <div className="flex gap-4 w-full lg:w-1/3">
            <div className="flex-1 p-2 border-2 border-[#7A9B55] rounded-xl flex items-center justify-center">
              <img
                src={selectedImage}
                alt={getLangText("name")}
                className="w-full h-full object-contain rounded-xl"
                style={{ maxHeight: "500px", height: "100%", width: "100%" }}
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

          {/* Right Block */}
          <div className="flex flex-col w-full lg:w-2/3 space-y-4">
            <h1 className="text-2xl font-bold text-[#2c2c2c]">
              {getLangText("name")}
            </h1>
            {/* Description Block */}
            <div ref={descriptionRef} className="space-y-4">
              {/* <h2 className="text-2xl font-bold text-[#7bb44d]">
                Описание товара
              </h2> */}
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {getLangText("description")}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {product?.file?.url && (
                <a
                  href={product.file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#7A9B55]  text-[#fff] hover:bg-[#6E8D4B] transition text-sm font-medium"
                >
                  <FileDown size={18} /> Аннотация файл
                </a>
              )}
              <button
                onClick={() => navigate("/contacts")}
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#7A9B55] text-white hover:bg-[#6E8D4B] transition text-sm font-medium"
              >
                <Phone size={18} /> Связаться с нами
              </button>
            </div>

            <div className="flex gap-4 flex-wrap relative">
              <button
                onClick={scrollToDescription}
                className="w-[180px] px-6 py-2 rounded-full border border-[#7A9B55] text-[#7A9B55] hover:bg-[#F4F9EE] transition text-sm font-medium"
              >
                Узнать подробнее
              </button>

              {/* Dropdown */}
              <div ref={dropdownRef} className="flex gap-4 flex-wrap relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-[180px] px-6 py-2 rounded-full border border-[#7A9B55] text-[#7A9B55] hover:bg-[#F4F9EE] transition text-sm font-medium"
                >
                  Купить
                  <span
                    className={`${dropdownOpen ? "rotate-180" : ""} transition`}
                  >
                    ▾
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="absolute top-[110%] left-0 w-[180px] flex flex-col border border-[#7A9B55] rounded-xl bg-white z-20">
                    {product?.link_1 && product?.link_1 !== "" && (
                      <a
                        href={product.link_1}
                        target="_blank"
                        className="px-4 py-2 text-[#2c2c2c] text-sm hover:bg-[#F4F9EE] border-b border-[#D9E5C2]"
                      >
                        Uzum
                      </a>
                    )}
                    {product?.link_2 && product?.link_2 !== "" && (
                      <a
                        href={product.link_2}
                        target="_blank"
                        className="px-4 py-2 text-[#2c2c2c] text-sm hover:bg-[#F4F9EE] border-b border-[#D9E5C2]"
                      >
                        Yandex
                      </a>
                    )}
                    {product?.link_3 && product?.link_3 !== "" && (
                      <a
                        href={product.link_3}
                        target="_blank"
                        className="px-4 py-2 text-[#2c2c2c] text-sm hover:bg-[#F4F9EE]"
                      >
                        Аптека
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Video Section */}
        {product?.video && product?.video !== "нет" && (
          <div className="w-full aspect-video rounded-xl overflow-hidden">
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
