import styled from "styled-components";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Recommend from "./Recommend";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import scrollreveal from "scrollreveal";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0.8,
        interval: 300,
      }
    );
  }, []);

  return (
    <Main>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

