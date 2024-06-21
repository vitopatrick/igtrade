import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const links = [
  {
    title: "Financial institution",
    img: "https://www.rjobrien.com/wp-content/themes/gate39media/img/skyscrapers.png",
  },
  {
    title: "Introducing Broker",
    img: "https://www.rjobrien.com/wp-content/themes/gate39media/img/shaking-hands.png",
  },
  {
    title: "Commercial Ag",
    img: "https://www.rjobrien.com/wp-content/themes/gate39media/img/wheat.png",
  },
  {
    title: "Individual Trader",
    img: "https://www.rjobrien.com/wp-content/themes/gate39media/img/woman-on-phone.png",
  },
];

const FcmCard = () => {
  return (
    <div>
      <Card className="lg:w-[70%] p-8 mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-medium uppercase text-center">
            The FCM Trusted Worldwide
          </CardTitle>
          <div>
            <p className="text-center  text-sm">
              R.J. O’Brien & Associates LLC is the oldest and largest
              independent futures brokerage firm in the U.S. We provide a full
              range of services to the futures industry’s largest global network
              of introducing brokers and commercial, institutional and
              individual investors.
            </p>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col lg:flex-row gap-4">
          {links.map((link) => (
            <div key={link.title}>
              <div className="text-center bg-cyan-800 text-white p-4">
                {link.title}
              </div>
              <div className="w-full">
                <img src={link.img} alt={link.title} className="w-full" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default FcmCard;
