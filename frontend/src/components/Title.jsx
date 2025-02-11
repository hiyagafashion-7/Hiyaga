import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Title = ({ text1, text2, paragraph }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="inline-flex gap-2 items-center mb-3">
        <p className="text-gray-500 text-4xl uppercase font-medium">
          {text1} <span className="text-black ">{text2}</span>{" "}
        </p>
        <p className="w-8 sm:w-12 h-1 bg-black"></p>
      </div>
      <div>
        <p className="px-0 pb-10 md:px-40 text-gray-700">{paragraph}</p>
      </div>
    </div>
  );
};

export default Title;
