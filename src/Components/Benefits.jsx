import React from "react";
import CountryIcon from "../assets/icons/189.svg";
import InsightIcon from "../assets/icons/insight.svg";
import KanbanIcon from "../assets/icons/kanban.svg";
import OfflineIcon from "../assets/icons/offline.svg";
import RewardIcon from "../assets/icons/reward.svg";
import TrackLeadsIcon from "../assets/icons/track-leads.svg";

function Benefits() {
  return (
    <div className="mt-20 md:mt-130">
      <div className="flex flex-col justify-center items-center mb-50 md:mb-70">
        <h3 className="font-bold text-red uppercase mb-small">WORK BETTER</h3>
        <h1 className="text-4xl text-black font-bold mb-5">
          For Your Business
        </h1>
        <h3 className="text-dark-gray text-center w-386 leading-32">
          We did research what your company needs and here we are providing all
          of them just for you
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-31 md:px-65 lg:px-204 gap-90">
        <div className="flex gap-6 items-start">
          <img src={InsightIcon} alt="insight icon" className="w-60" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl text-black mb-3">
              Share Insights
            </h2>
            <h3 className="leading-32 text-dark-gray">
              Working together with your team to make decisions
            </h3>
          </div>
        </div>

        <div className="flex gap-6  items-start">
          <img src={TrackLeadsIcon} alt="track leads icon" className="w-60" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl text-black mb-3">
              Track Leads
            </h2>
            <h3 className="leading-32 text-dark-gray">
              See where your money goes and comes in business
            </h3>
          </div>
        </div>

        <div className="flex gap-6  items-start">
          <img src={OfflineIcon} alt="Offline Mode icon" className="w-60" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl text-black mb-3">
              Offline Mode
            </h2>
            <h3 className="leading-32 text-dark-gray">
              Use the feature while off from internet? sure can
            </h3>
          </div>
        </div>

        <div className="flex gap-6  items-start">
          <img src={KanbanIcon} alt="Kanban mode icon" className="w-60" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl text-black mb-3">
              Kanban Mode
            </h2>
            <h3 className="leading-32 text-dark-gray">
              Organize the report that easy to be understand
            </h3>
          </div>
        </div>

        <div className="flex gap-6  items-start">
          <img src={RewardIcon} alt="Reward icon" className="w-60" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl text-black mb-3">
              Reward System
            </h2>
            <h3 className="leading-32 text-dark-gray">
              Motivate your team working harder and receive a gift
            </h3>
          </div>
        </div>

        <div className="flex gap-6  items-start">
          <img src={CountryIcon} alt="189 Country icon" className="w-60" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl text-black mb-3">
              189 Country
            </h2>
            <h3 className="leading-32 text-dark-gray">
              Working together worldwide people from anywhere
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
