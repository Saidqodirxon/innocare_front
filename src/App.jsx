import { useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Main = lazy(() => import("./pages/main/main"));
const NotFound = lazy(() => import("./pages/404page/404"));
const ContactsPage = lazy(() => import("./pages/contacts"));
const AboutPage = lazy(() => import("./pages/about"));
const AdvantagesPage = lazy(() => import("./pages/advantages"));
const NewsPage = lazy(() => import("./pages/news"));
const CatalogPage = lazy(() => import("./pages/catalog"));
const PartnersPage = lazy(() => import("./pages/partners"));
const TermsPage = lazy(() => import("./pages/terms"));
const ProductsPage = lazy(() => import("./pages/products"));

const Loader = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="w-16 h-16 border-t-4 border-[#71914B] border-solid rounded-full animate-spin"></div>
  </div>
);

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<ProductsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/advantages" element={<AdvantagesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      )}
    </main>
  );
}

export default App;
