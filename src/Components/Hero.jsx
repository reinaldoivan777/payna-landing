import React from "react";
import HeroImage from "../assets/Group 4.png";
import HeroImageBulkExport from "../assets/Group 6.png";
import HeroImageAnalytics from "../assets/Group 7.png";

function Hero() {
  return (
    <div className="mt-52 px-6 md:mt-100 md:text-center lg:text-left flex justify-between items-center lg:px-160">
      <div className="flex flex-col md:items-center md:w-full lg:w-443 lg:items-start">
        <h1 className="mb-5 font-bold text-38 md:text-55 text-black">
          Manage Payroll <br /> Like an Expert
        </h1>
        <h3 className="leading-32 text-dark-gray mb-30 max-w-[423px]">
          Payna is helping you to setting up the payroll without required any
          finance skills or knowledge before
        </h3>
        <button className="text-white bg-blue rounded-50 font-semibold w-180 h-[48px]">
          Get Started
        </button>
      </div>

      <div className="relative hidden lg:block">
        <img src={HeroImage} alt="Hero Image" className="w-540" />
        <img
          src={HeroImageAnalytics}
          alt="Hero Analytics"
          className="absolute -left-[105px] top-1/3 w-213"
        />
        <img
          src={HeroImageBulkExport}
          alt="Hero Bulk Export"
          className="absolute -right-16 top-[53px] w-213"
        />
      </div>
    </div>
  );
}

export default Hero;
