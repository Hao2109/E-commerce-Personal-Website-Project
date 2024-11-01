import { assets } from "../assets/assets";

import { useEffect } from "react";
const Hero = () => {
  return (
    <section className="flex flex-col border border-gray-400 sm:flex-row">
      {/*Hero Left Side */}
      <div
        className="flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0"
        data-aos="fade-right"
      >
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="text-sm font-medium md:text-sm">OUR BEST SELLER</p>
          </div>
          <h1 className="text-3xl leading-relaxed prata-regular sm:py-3 lg:text-5xl">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold md:text-base">SHOP NN</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141] "></p>
          </div>
        </div>
      </div>
      {/*Hero Right Side */}
      <img
        src={assets.hero_img}
        alt=""
        className="w-full sm:w-1/2"
        data-aos="fade-right"
      />
    </section>
  );
};

export default Hero;
