import { useEffect } from "react";
import Bestseller from "../components/Bestseller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800, // Thời gian chuyển động (ms)
      easing: "ease-in-sine", // Hiệu ứng chỉ chạy một lần khi cuộn vào
    });
  }, []);
  return (
    <div data-aos="zoom-in">
      <Hero />
      <LatestCollection />
      <Bestseller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
