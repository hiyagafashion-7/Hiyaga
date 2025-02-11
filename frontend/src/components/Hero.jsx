import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { assets } from "../assets/frontend_assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className=" relative mt-24">
      <img
        src={assets.hero_img}
        alt=""
        className="w-full rounded-md object-cover h-full md:h-full xl:h-[520px] "
      />
      {/* <div className="absolute inset-0  rounded-md"></div> */}
      <div
        className=" absolute rounded-md  inset-0 flex px-5 lg:pl-10 items-center "
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 100%)",
        }}
      >
        <div className="grid " data-aos="fade-right">
          <div className="">
            <p className="text-white text-2xl sm:text-5xl font-semibold normal-case">
              Welcome to,
            </p>
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-sky-600 to-sky-400">
              <h2 className=" text-4xl sm:text-7xl font-bold py-2 ">
                HIYAGA FASHION
              </h2>
            </div>
          </div>

          <TypeAnimation
            className=" font-semibold text-xl sm:text-4xl text-white"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Step Into Style!",
              1500, // wait 1s before replacing "Mice" with "Hamsters"
              "Step Into Comfort!",
              1500,
            ]}
            wrapper="span"
            speed={60}
            style={{}}
            repeat={Infinity}
          />

         
        </div>
      </div>
    </div>
  );
};

export default Hero;
