import React from "react";
import AppleLogo from "../assets/apple-11 1.svg";
import GoogleLogo from "../assets/google-2015 1.svg";
import AdobeLogo from "../assets/Group 13.svg";
import SlackLogo from "../assets/slack-2 1.svg";
import SpotifyLogo from "../assets/spotify-1 1.svg";

function TrustedBy() {
  return (
    <div className="flex flex-col px-6 md:px-0 md:text-center lg:text-left lg:flex-row lg:items-center lg:justify-between lg:px-160 mt-70">
      <h3 className="font-semibold w-full mb-30 lg:mb-0 lg:w-152">
        Trusted by Global Companies
      </h3>
      <div className="flex md:items-center flex-wrap md:justify-center gap-50">
        <img src={AppleLogo} alt="Apple Logo" />
        <img src={AdobeLogo} alt="Adobe Logo" />
        <img src={SlackLogo} alt="Slack Logo" />
        <img src={SpotifyLogo} alt="Spotify Logo" />
        <img src={GoogleLogo} alt="Google Logo" />
      </div>
    </div>
  );
}

export default TrustedBy;
