import React, { useEffect } from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className=" overflow-x-hidden">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <div data-aos="fade-right">
          <img
            className="w-full md:max-w-[450px] hover:scale-105 duration-300 rounded-md shadow-lg cursor-pointer"
            src={assets.about_img}
          />
        </div>

        <div
          className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-800"
          data-aos="fade-left"
        >
          <p>
            Hiyaga Footwear is a brand dedicated to combining style, comfort,
            and quality in every step. Our mission is to craft footwear that
            inspires confidence and complements your lifestyle, whether you're
            conquering the boardroom, exploring the outdoors, or strolling
            through everyday life. Rooted in innovation and sustainability, we
            prioritize using premium materials and ethical practices to create
            shoes that are as durable as they are fashionable. With a passion
            for design and a commitment to customer satisfaction, Hiyaga
            Footwear strives to deliver exceptional products that redefine
            comfort without compromising on elegance. Step into the future with
            Hiyaga – where every stride matters.
          </p>

          <ul className="mt-5 flex gap-6 justify-start md:gap-6">
            <Link to={"https://www.facebook.com/share/18F3WzoKpb/"} className=" bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-12 h-12 cursor-pointer group flex items-center justify-center">
              <img
                className="w-8 p-1 group-hover:w-9 duration-200"
                src={assets.facebook}
                alt=""
              />
            </Link>

            <Link to={"https://www.instagram.com/hiyaga.in?igsh=MmV3d2hpamFwYzlr"} className="bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-12 h-12 cursor-pointer group flex items-center justify-center">
              <img
                className="w-8 p-1 group-hover:w-9 duration-200"
                src={assets.instagram}
                alt=""
              />
            </Link>

            <Link to={"https://x.com/hiyaga84242?t=9NYER4UQn0UW9plSZ0Nmvw&s=08"} className="bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-12 h-12 cursor-pointer group flex items-center justify-center">
              <img
                className="w-8 p-1 group-hover:w-9 duration-200"
                src={assets.x}
                alt=""
              />
            </Link>

            <Link className="bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-12 h-12 cursor-pointer group flex items-center justify-center">
              <img
                className="w-8 p-1 group-hover:w-9 duration-200"
                src={assets.linkedin}
                alt=""
              />
            </Link>
          </ul>
          <div>
            <Link 
              onClick={()=>window.scroll(0,0)}
              to={"/collection"}
              className="relative border border-black inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg]  bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Shop Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
