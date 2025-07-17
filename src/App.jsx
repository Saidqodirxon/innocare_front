import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/main/main";
import NotFound from "./pages/404page/404";
import ScrollToTopButton from "./components/scrollTopBtn";
import ProjectsPage from "./pages/projects";
import ContactsPage from "./pages/contacts";
import AboutPage from "./pages/about";
import CallButton from "./components/callBtn";
import AdvantagesPage from "./pages/advantages";
import NewsPage from "./pages/news";
import CatalogPage from "./pages/catalog";
import PartnersPage from "./pages/partners";
import TermsPage from "./pages/terms";
import ProductsPage from "./pages/products";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-16 h-16 border-t-4 border-[#71914B] border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<ProductsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <CallButton />
        </>
      )}
    </main>
  );
}

export default App;
