import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="bg-zinc-800">
      <div className="mx-auto max-w-screen-xl py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="p-2">
            <div className="flex justify-center sm:justify-start">
              <img src={assets.logo} alt="" className="w-20" />
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>

            <ul className="mt-5 flex gap-6 justify-center md:justify-start md:gap-6">
              <Link to={"https://www.facebook.com/share/18F3WzoKpb/"} className=" bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-10 h-10 cursor-pointer group flex items-center justify-center">
                <img
                  className="w-8 p-1 group-hover:w-9 duration-200"
                  src={assets.facebook}
                  alt=""
                />
              </Link>

              <Link to={"https://www.instagram.com/hiyaga.in?igsh=MmV3d2hpamFwYzlr"} className="bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-10 h-10 cursor-pointer group flex items-center justify-center">
                <img
                  className="w-8 p-1 group-hover:w-9 duration-200"
                  src={assets.instagram}
                  alt=""
                />
              </Link>

              <Link to={"https://x.com/hiyaga84242?t=9NYER4UQn0UW9plSZ0Nmvw&s=08"} className="bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-10 h-10 cursor-pointer group flex items-center justify-center">
                <img
                  className="w-8 p-1 group-hover:w-9 duration-200"
                  src={assets.x}
                  alt=""
                />
              </Link>

              <Link className="bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-10 h-10 cursor-pointer group flex items-center justify-center">
                <img
                  className="w-8 p-1 group-hover:w-9 duration-200"
                  src={assets.linkedin}
                  alt=""
                />
              </Link>
            </ul>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-y-8 mt-5">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Quick Links</p>

              <ul className="mt-4 space-y-4 text-sm grid">
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/collection"
                  onClick={()=>{
                    window.scroll(0,0)
                  }}
                >
                  Collection
                </Link>

                <Link
                  className="text-white transition hover:text-white/75"
                  to="/about"
                  onClick={()=>{
                    window.scroll(0,0)
                  }}
                >
                  About
                </Link>

                <Link
                  className="text-white transition hover:text-white/75"
                  to="/contact"
                  onClick={()=>{
                    window.scroll(0,0)
                  }}
                >
                 Contact Us
                </Link>

                <Link
                  className="text-white transition hover:text-white/75"
                  to="/team"
                  onClick={()=>{
                    window.scroll(0,0)
                  }}
                >
                  Our Team
                </Link>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Shop Now</p>

              <ul className="mt-4 space-y-4 text-sm grid place-items-center md:place-items-start">
                <Link
                  className="text-white transition hover:text-white/75 flex items-center "
                  to="https://www.flipkart.com/hiyaga-women-flats/p/itmfa63f86c800df?pid=SNDH5Z8NYMRWE55R&lid=LSTSNDH5Z8NYMRWE55RAAY5AH&marketplace=FLIPKART&cmpid=content_sandal_8965229628_gmc"
                >
                  <div className=" w-8 h-8 flex items-center justify-center ">
                    <img src={assets.flipkart} alt="" className="w-8 p-1" />
                  </div>
                  Flipkart
                </Link>

                <Link
                  className="text-white transition hover:text-white/75 flex items-center "
                  to="https://www.amazon.in/HIYAGA-Striped-Comfortable-Decorative-Everyday/dp/B0DKDDRND3?th=1&psc=1"
                >
                  <div className=" w-8 h-8 flex items-center justify-center ">
                    <img src={assets.amazon} alt="" className="w-8 p-1" />
                  </div>
                  Amazon
                </Link>

                <Link
                  className="text-white transition hover:text-white/75 flex items-center "
                  to="https://www.meesho.com/hiyaga-sandal-and-shoes-for-womenn-and-girls-pack-of-2/p/7k55l8"
                >
                  <div className=" w-8 h-8 flex items-center justify-center ">
                    <img src={assets.meesho} alt="" className="w-8 p-1" />
                  </div>
                  Meesho
                </Link>

                <Link
                  className="text-white transition hover:text-white/75 flex items-center "
                  to="https://IndiaMART.in/12NB6r53"
                >
                  <div className=" w-8 h-8 flex items-center justify-center ">
                    <img src={assets.indiamart} alt="" className="w-8 p-1" />
                  </div>
                  Indiamart
                </Link>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>

              <ul className="mt-4 space-y-4 text-sm grid">
                <Link
                  className="text-white transition hover:text-white/75"
                  to="mailto:Info@hiyaga.com"
                >
                  Info@hiyaga.com
                </Link>

                <Link
                  className="text-white transition hover:text-white/75"
                  to="tel:9220620844"
                >
                 +91-9220620844
                </Link>

                <Link to={""} className="text-white transition hover:text-white/75">
                Bawana DSIDC, Sector 5, New Delhi
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-5">
          <div className="text-center sm:flex sm:justify-between sm:text-left">

            <p className="pb-5 text-sm text-white sm:pb-0">
              &copy; 2024 HIYAGA - All rights reserved.
            </p>
            <Link to={"https://shreeradhatechnology.com/"} className="text-sm text-white">
              Developed by SR Technology
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
