import React, { useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopAd = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div className="mt-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md p-4  grid grid-cols-3">
        {/* <img src={assets.shopNow} alt="" className="w-20" /> */}
        <div className="flex items-center">
          <div data-aos="fade-right">
            <div className=" flex items-center justify-center">
              <img
                src={assets.shopNow}
                className="md:w-20 md:h-20 w-14 h-14"
                alt=""
              />
            </div>
            <div className="grid grid-cols-4 gap-5 md:gap-2 mt-2">
              <Link to={"https://www.flipkart.com/hiyaga-women-flats/p/itmfa63f86c800df?pid=SNDH5Z8NYMRWE55R&lid=LSTSNDH5Z8NYMRWE55RAAY5AH&marketplace=FLIPKART&cmpid=content_sandal_8965229628_gmc"} className=" rounded-full flex items-center justify-center w-8 h-8 md:w-12 md:h-12 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                <div className="w-6 h-6  md:w-10 md:h-10 flex items-center justify-center rounded-full">
                  <img src={assets.flipkart} alt="" className="w-6" />
                </div>
                {/* <p>Flipkart</p> */}
              </Link>

              <Link to={"https://www.amazon.in/stores/Women%E2%80%99sFootwearCollection/page/89753C68-DA78-4308-8226-BECFB4B8CFCC?ref_=ast_bln"} className=" rounded-full flex items-center justify-center w-8 h-8 md:w-12 md:h-12  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="w-6 h-6  md:w-10 md:h-10 flex items-center justify-center rounded-full">
                  <img src={assets.amazon} alt="" className="w-6" />
                </div>
                {/* <p>Amazon</p> */}
              </Link>
              <Link to={"https://www.meesho.com/knn1d?ms=2"} className=" rounded-full flex items-center justify-center w-8 h-8 md:w-12 md:h-12 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                <div className="w-6 h-6  md:w-10 md:h-10 flex items-center justify-center rounded-full">
                  <img src={assets.meesho} alt="" className="w-6" />
                </div>
                {/* <p>Meesho</p> */}
              </Link>
              <Link to={"https://IndiaMART.in/12NB6r53"} className=" rounded-full flex items-center justify-center w-8 h-8 md:w-12 md:h-12 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="w-6 h-6  md:w-10 md:h-10 flex items-center justify-center rounded-full">
                  <img src={assets.indiamart} alt="" className="w-6" />
                </div>
                {/* <p>Indiamart</p> */}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div data-aos="fade-up">
            <h2 className="text-center text-2xl  md:text-6xl tracking-tighter font-bold">
              Up to {""}
              <br className="sm:hidden" />
              50% Off
            </h2>
            <p className="text-center mt-4 hidden md:flex">
              Discover amazing discounts and unbeatable deals! Shop now to enjoy
              significant savings on a wide range of your favorite items.
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-end" data-aos="fade-left">
          <img src={assets.shopNowImage} className="w-28 md:w-40" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShopAd;
