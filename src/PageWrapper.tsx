import { useEffect } from "react";
import AOS from "aos";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.refresh(); // sahifa yuklanganda AOS yangilanadi
  }, []);

  return <div data-aos="fade-up">{children}</div>;
};

export default PageWrapper;
