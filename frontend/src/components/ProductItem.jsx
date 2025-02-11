import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductItem = ({ id, image, name, price, description }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="text-gray-800 shadow-md hover:shadow-2xl rounded-md"
      data-aos="fade-up"
    >
      <div className="overflow-hidden p-4">
        <img src={image[0]} alt="" className="hover:scale-110 duration-300" />
      </div>
      <div className=" p-2 px-4 flex justify-between">
        <p>HIYAGA</p>
        <div className=" capitalize">
          <p className="font-medium">{name}</p>
          <p className="text-sm font-medium text-green-600 ">
           {currency} <span className="text-green-600"> {price}</span>{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
