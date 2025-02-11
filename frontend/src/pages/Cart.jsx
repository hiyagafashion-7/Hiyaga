import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, token } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // Ensure cartItems are loaded properly before processing
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (products.length > 0) {
          const tempData = [];
          for (const itemId in parsedCart) {
            for (const size in parsedCart[itemId]) {
              if (parsedCart[itemId][size] > 0) {
                tempData.push({
                  _id: itemId,
                  size: size,
                  quantity: parsedCart[itemId][size],
                });
              }
            }
          }
          setCartData(tempData);
        }
      } catch (error) {
        console.error("Failed to parse cart data:", error);
      }
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"Your"} text2={"cart"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) return null; // Prevent rendering errors

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4"
            >
              <div className="flex items-start gap-5">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image?.[0] || assets.placeholder_image}
                  alt={productData.name}
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="text-green-600 font-semibold">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="font-semibold">
                      Size:{" "}
                      <span className="px-2 sm:px-3 sm:py-1 border bg-slate-100">
                        {item.size}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold">Quantity</p>
                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  value={item.quantity} // Use value instead of defaultValue
                />
              </div>
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                className="w-5 mr-4 cursor-pointer"
                alt="Delete"
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
        <div className="w-full text-end">
          <button
            onClick={() => navigate("/place-order")}
            className="relative border border-black inline-flex items-center justify-start px-4 py-3 overflow-hidden font-medium transition-all bg-white hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Proceed To Checkout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
