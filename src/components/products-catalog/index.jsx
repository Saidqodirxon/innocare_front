import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductsCatalog = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const navigate = useNavigate();

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

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory
      ? product.categoryId === selectedCategory
      : true;
    const brandMatch = selectedBrand ? product.brandId === selectedBrand : true;
    return categoryMatch && brandMatch;
  });

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f9f9f9" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          background: "#fff",
          borderRight: "1px solid #ddd",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <button
          style={{
            background: "#71914B",
            color: "#fff",
            border: "none",
            padding: "12px",
            width: "100%",
            borderRadius: "4px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          Категории
        </button>
        <div style={{ marginBottom: "20px", fontSize: "14px" }}>
          {categories.map((cat) => (
            <div
              key={cat._id}
              onClick={() => setSelectedCategory(cat._id)}
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
            >
              {cat.name_ru}
            </div>
          ))}
        </div>

        <button
          style={{
            background: "#71914B",
            color: "#fff",
            border: "none",
            padding: "12px",
            width: "100%",
            borderRadius: "4px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          Бренд
        </button>
        <div style={{ fontSize: "14px", marginBottom: "20px" }}>
          {brands.map((brand) => (
            <div
              key={brand._id}
              onClick={() => setSelectedBrand(brand._id)}
              style={{
                cursor: "pointer",
                marginBottom: "8px",
                padding: "8px 12px",
                borderRadius: "4px",
                background:
                  selectedBrand === brand._id ? "#e8f5e9" : "transparent",
                fontWeight: selectedBrand === brand._id ? "bold" : "normal",
                color: "#333",
              }}
            >
              {brand.name}
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            setSelectedCategory(null);
            setSelectedBrand(null);
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
          Очистка
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
              height: "300px",
              minHeight: "300px",
              maxHeight: "500px",
            }}
          >
            <div
              style={{
                padding: "15px",
                // height: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={product.image?.[0]?.url}
                alt={product.name_uz}
                style={{
                  maxHeight: "200px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ padding: "0 10px 15px" }}>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "6px",
                  color: "#222",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {product.name_uz || product.name_ru}
              </h4>
              <p
                style={{
                  fontSize: "12px",
                  color: "#777",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {product.description_uz || "Барча тери тури учун идеал."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCatalog;
