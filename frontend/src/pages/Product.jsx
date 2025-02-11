import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex flex-1 flex-col-reverse gap-4 sm:flex-row">
          <div className="flex sm:flex-col sm:gap-0 gap-2 pb-2 overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
                className="w-[25%] sm:w-full sm:mb-4 border border-gray-200 cursor-pointer flex-shrink-0"
              />
            ))}
          </div>

          <div className="w-full sm:w-[70%] ">
            <img src={image} alt="" className="w-full h-auto " />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium mt-2 text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_dull_icon} alt="" className="w-4" />
            <p className="pl-2">{122}</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-xl">{productData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p>select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border-2 bg-slate-300 py-2 px-4 ${
                    item === size ? "border-black" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="relative border border-black inline-flex items-center justify-start px-4 py-3 overflow-hidden font-medium transition-all bg-white  hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg]  bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Add To Cart
            </span>
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-600 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery</p>
            <p>Easy return and exchange policy with in 7 days</p>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3">Description</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600">
          <p>
          Discover a wide range of fashion-forward footwear that combines style, comfort, and quality. From trendy designs to timeless classics, we offer carefully curated shoes for every occasion. Whether you're looking for casual sneakers, elegant formal shoes, or versatile sandals, our collection has something to match your taste.
          </p>
          <p>
          Explore the latest styles, made with premium materials and crafted for a perfect fit. Each pair is designed to help you step out confidently and express your unique style effortlessly. Shop now and experience footwear like never before with our exclusive range, made to keep you looking and feeling your best.
          </p>
        </div>
      </div>

      {/* disply related product */}
      <div>
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
