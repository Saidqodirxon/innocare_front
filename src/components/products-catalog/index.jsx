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
          width: "200px",
          background: "#fff",
          borderRight: "1px solid #ddd",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <button
          style={{
            background: "#799c56",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            marginBottom: "15px",
            width: "100%",
            cursor: "pointer",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          Категории
        </button>

        <div style={{ fontSize: "14px", marginBottom: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            {categories.map((cat) => (
              <div
                key={cat._id}
                style={{
                  marginBottom: "8px",
                  cursor: "pointer",
                  color: "#555",
                  background:
                    selectedCategory === cat._id ? "#e8f5e9" : "transparent",
                  fontWeight: selectedCategory === cat._id ? "bold" : "normal",
                  padding: "5px 8px",
                  borderRadius: "4px",
                }}
                onClick={() => setSelectedCategory(cat._id)}
              >
                {cat.name_ru}
              </div>
            ))}
          </div>

          <button
            style={{
              background: "#799c56",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              marginBottom: "10px",
              width: "100%",
              cursor: "pointer",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            Бренд
          </button>

          <div style={{ marginBottom: "15px" }}>
            {brands.map((brand) => (
              <div
                key={brand._id}
                style={{
                  marginBottom: "8px",
                  cursor: "pointer",
                  color: "#555",
                  background:
                    selectedBrand === brand._id ? "#e8f5e9" : "transparent",
                  fontWeight: selectedBrand === brand._id ? "bold" : "normal",
                  padding: "5px 8px",
                  borderRadius: "4px",
                }}
                onClick={() => setSelectedBrand(brand._id)}
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
              border: "1px solid #799c56",
              color: "#799c56",
              padding: "8px",
              width: "100%",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Очистка
          </button>
        </div>
      </div>

      {/* Product List */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            style={{
              background: "#fff",
              borderRadius: "10px",
              border: "1px solid #e0e0e0",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              overflow: "hidden",
              textAlign: "center",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            onClick={() => navigate(`/catalog/${product._id}`)}
          >
            <img
              src={product.image?.[0]?.url}
              alt={product.name_uz}
              style={{
                height: "150px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h4 style={{ fontSize: "14px", margin: "5px 0" }}>
              {product.name_uz || product.name_ru}
            </h4>
            <p style={{ fontSize: "12px", color: "#888" }}>
              {product.description_uz || "Барча тери тури учун идеал."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCatalog;
