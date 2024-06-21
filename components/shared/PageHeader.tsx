import React from "react";

const PageHeader = ({ title, subtitle, caption }: any) => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://www.rjobrien.com/wp-content/uploads/2018/08/Hero-About-RJO.jpg')",
        backgroundPosition: "center center",
      }}
    >
      <div className="text-center h-full w-full bg-gradient-to-br from-green-500/50 to-green-600/30 flex items-center justify-center flex-col space-y-4 p-8">
        <h4 className="text-white text-3xl font-bold uppercase">{title}</h4>
        <h3 className="text-white text-4xl capitalize font-bold">{subtitle}</h3>
        <p className="text-white ">{caption}</p>
      </div>
    </div>
  );
};

export default PageHeader;
