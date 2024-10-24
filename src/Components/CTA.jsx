import React from "react";
import CTAImage from "../assets/CTA.png";

function CTA() {
  return (
    <div className="px-6 mt-20 md:px-0 lg:px-189 md:mt-130 flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-124">
      <img
        src={CTAImage}
        alt="CTA image"
        className="w-[321px] md:w-[522px] lg:w-[635px] mb-10 md:mb-[50px] lg:mb-0"
      />
      <div className="flex flex-col">
        <h3 className="text-red uppercase mb-small font-bold text-center lg:text-left">
          SAVE MORE TIME
        </h3>
        <h1 className="text-[36px] text-black font-bold mb-5 text-center lg:text-left">
          And Boost Productivity
        </h1>
        <h3 className="text-dark-gray leading-32 max-w-[388px] text-center lg:text-left mb-10">
          Your employees can bring any success into your business, so we need to
          take care of them
        </h3>
        <form className="relative flex flex-col px-[14px] md:px-0 md:block">
          <input
            type="text"
            placeholder="Email Address"
            className="w-full mb-3 md:mb-0 md:w-[299px] rounded-50 px-6 py-3 bg-light-gray text-black"
          />
          <button
            type="submit"
            className="bg-blue text-white w-full md:w-[180px] h-[48px] md:absolute md:right-3 rounded-50"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

export default CTA;
