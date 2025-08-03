import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductsCatalog = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || "ru";
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get("https://back.innocare.uz/products")
      .then(({ data }) => setProducts(data.data));
    axios
      .get("https://back.innocare.uz/categories")
      .then(({ data }) => setCategories(data.data));
    axios
      .get("https://back.innocare.uz/brands")
      .then(({ data }) => setBrands(data.data));
  }, []);

  // Query param categoryId bor bo‘lsa, uni tanlab o‘rnatamiz
  useEffect(() => {
    const catId = searchParams.get("categoryId");
    if (catId) setSelectedCategory(catId);
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory
      ? product.categoryId === selectedCategory
      : true;
    const brandMatch = selectedBrand ? product.brandId === selectedBrand : true;
    return categoryMatch && brandMatch;
  });

  const getLocalized = (obj, field) =>
    obj?.[`${field}_${currentLang}`] || obj?.[`${field}_ru`] || "";

  return (
    <div
      style={{
        display: "flex",
        minHeight: "300px",
        height: "100%",
        background: "#f9f9f9",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          maxWidth: "500px",
          minWidth: "300px",
          background: "#fff",
          borderRight: "1px solid #ddd",
          padding: "20px",
          boxSizing: "border-box",
        }}
        className="text-[16px]"
      >
        <button
          style={{
            background: "#71914B",
            color: "#fff",
            border: "none",
            padding: "12px",
            width: "100%",
            borderRadius: "4px",
            marginBottom: "15px",
          }}
        >
          {t("categories")}
        </button>
        <div style={{ marginBottom: "20px", fontSize: "14px" }}>
          {categories.map((cat) => (
            <div
              key={cat._id}
              onClick={() => {
                setSelectedCategory(cat._id);
                navigate(`/catalog?categoryId=${cat._id}`);
              }}
              style={{
                cursor: "pointer",
                marginBottom: "8px",
                padding: "8px 12px",
                borderRadius: "4px",
                background:
                  selectedCategory === cat._id ? "#e8f5e9" : "transparent",
                fontWeight: selectedCategory === cat._id ? "bold" : "normal",
                color: "#333",
              }}
              className="text-[16px] uppercase"
            >
              {getLocalized(cat, "name")}
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            setSelectedCategory(null);
            setSelectedBrand(null);
            navigate("/catalog");
          }}
          style={{
            border: "1px solid #71914B",
            color: "#71914B",
            width: "100%",
            padding: "10px",
            fontWeight: "bold",
            borderRadius: "4px",
          }}
        >
          {t("Tozalash")}
        </button>
      </div>

      {/* Product Grid */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            onClick={() => navigate(`/catalog/${product._id}`)}
            style={{
              background: "#fff",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              cursor: "pointer",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <div
              style={{
                padding: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={product.image?.[0]?.url}
                alt={getLocalized(product, "name")}
                style={{
                  maxHeight: "400px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ padding: "0 10px 15px" }}>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "6px",
                  color: "#222",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {getLocalized(product, "name")}
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {getLocalized(product, "description")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCatalog;
