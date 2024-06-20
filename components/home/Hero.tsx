import React from "react";

const Hero = () => {
  return (
    <div
      className="h-[70vh]"
      style={{
        backgroundImage:
          "url('https://www.rjobrien.com/wp-content/themes/gate39media/img/homepage-hero-man.3.jpg')",
      }}
    >
      <div className="pt-6">
        <h4 className="text-4xl lg:text-6xl font-semibold text-center text-white break-words">
          Over a Century of Futures Expertise
        </h4>
      </div>
    </div>
  );
};

export default Hero;
