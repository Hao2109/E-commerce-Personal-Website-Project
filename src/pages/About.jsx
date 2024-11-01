import { useEffect } from "react";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000, // Thời gian chuyển động (ms)
      easing: "ease-in-sine", // Hiệu ứng chỉ chạy một lần khi cuộn vào
    });
  }, []);
  return (
    <div data-aos="fade-right">
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p>
            {" "}
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
      <div className="py-4 text-xl ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col mb-20 text-sm md:flex-row">
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            {" "}
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Convenient:</b>
          <p className="text-gray-600">
            {" "}
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            {" "}
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
