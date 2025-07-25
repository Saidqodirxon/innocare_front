import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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
import PageWrapper from "./PageWrapper";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refreshHard();
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-16 h-16 border-t-4 border-[#71914B] border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Main />
                </PageWrapper>
              }
            />
            <Route
              path="/catalog"
              element={
                <PageWrapper>
                  <CatalogPage />
                </PageWrapper>
              }
            />
            <Route
              path="/catalog/:id"
              element={
                <PageWrapper>
                  <ProductsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/partners"
              element={
                <PageWrapper>
                  <PartnersPage />
                </PageWrapper>
              }
            />
            <Route
              path="/contacts"
              element={
                <PageWrapper>
                  <ContactsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/news"
              element={
                <PageWrapper>
                  <NewsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/advantages"
              element={
                <PageWrapper>
                  <AdvantagesPage />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <AboutPage />
                </PageWrapper>
              }
            />
            <Route
              path="/terms"
              element={
                <PageWrapper>
                  <TermsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/*"
              element={
                <PageWrapper>
                  <NotFound />
                </PageWrapper>
              }
            />
          </Routes>

          <CallButton />
          <ScrollToTopButton />
        </>
      )}
    </main>
  );
}

export default App;
