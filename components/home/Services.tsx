import { BarChart, CogIcon, Globe, Laptop2, Phone, Users } from "lucide-react";

const links = [
  {
    title: "Futures Brokerage",
    icon: <BarChart size={60} strokeWidth={0.8} />,
  },
  {
    title: "Execution",
    icon: <CogIcon size={60} strokeWidth={0.8} />,
  },
  {
    title: "OTC",
    icon: <Users size={60} strokeWidth={0.8} />,
  },
  {
    title: "Clearing",
    icon: <Globe size={60} strokeWidth={0.8} />,
  },
  {
    title: "Facilities Management",
    icon: <Phone size={60} strokeWidth={0.8} />,
  },
  {
    title: "Trading Technology",
    icon: <Laptop2 size={60} strokeWidth={0.8} />,
  },
];

const Services = () => {
  return (
    <div className="bg-cyan-800 text-white p-10 ">
      <h4 className="text-center font-bold text-2xl mt-8">Services</h4>
      <p className="text-center text-xs">
        As a leader in developing new technologies and forging strategies, our
        service suite is designed to keep clients competitive.
      </p>
      <div className="lg:w-[60%] mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {links.map((link) => (
          <div
            className="text-center flex items-center justify-center flex-col  shadow-md p-5"
            key={link.title}
          >
            <div className="my-6">{link.icon}</div>
            <p className="text-xl">{link.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
