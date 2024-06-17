import React from "react";

const Container = ({ children }: React.ReactNode | any) => {
  return <div className="p-4">{children}</div>;
};

export default Container;
