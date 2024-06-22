import React from "react";
import FcmCard from "./FcmCard";

const Hero = () => {
  return (
    <div
      className="lg:h-[70vh]"
      style={{
        backgroundImage:
          "url('https://www.rjobrien.com/wp-content/themes/gate39media/img/homepage-hero-man.3.jpg')",
      }}
    >
      <div className="pt-6 space-y-6">
        <h4 className="text-4xl lg:text-6xl font-semibold text-center text-white break-words">
          Over a Century of Futures Expertise
        </h4>
        <FcmCard />
      </div>
    </div>
  );
};

export default Hero;
