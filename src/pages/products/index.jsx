import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Contacts from "../../components/contacts/contacts";
import { Download, MessageCircle } from "lucide-react";

const ProductsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [lang, setLang] = useState("ru");
  const [selectedImage, setSelectedImage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const localLang = localStorage.getItem("i18nextLng");
    if (["uz", "ru", "en"].includes(localLang)) setLang(localLang);

    axios
      .get(`https://back.innocare.uz/products/${id}`)
      .then((res) => {
        const productData = res.data?.data;
        setProduct(productData);
        setSelectedImage(productData?.image?.[0]?.url || "");
      })
      .catch((err) => console.error("Ошибка получения продукта:", err));
  }, [id]);

  const getLangText = (field) =>
    product?.[`${field}_${lang}`] || product?.[`${field}_ru`] || "";

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
          {/* Image gallery */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            <img
              src={selectedImage}
              alt={getLangText("name")}
              className="rounded-2xl w-full object-contain border"
            />
            <div className="flex flex-wrap gap-2">
              {product?.image?.map((img, idx) => (
                <img
                  key={idx}
                  src={img.url}
                  alt={`product-${idx}`}
                  onClick={() => setSelectedImage(img.url)}
                  className={`w-16 h-16 rounded-lg object-cover cursor-pointer border-2 ${
                    selectedImage === img.url
                      ? "border-green-600"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col w-full lg:w-2/3 space-y-6">
            <h1 className="text-3xl font-bold">{getLangText("name")}</h1>
            <p className="text-gray-700 leading-relaxed">
              {getLangText("description")}
            </p>

            <div className="flex flex-wrap gap-4">
              {product?.file?.url && (
                <a
                  href={product.file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <Download size={18} /> Аннотация файл
                </a>
              )}
              <button
                onClick={() => navigate("/contacts")}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <MessageCircle size={18} /> Связаться с нами
              </button>
            </div>
          </div>
        </div>

        {/* Описание товара */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-green-700">Описание товара</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {getLangText("description")}
          </p>
        </div>
      </div>

      <Contacts />
      <Footer />
    </>
  );
};

export default ProductsPage;
