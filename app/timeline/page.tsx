import Footer from "@/components/home/Footer";
import NavigationBar from "@/components/home/Nabar";
import { BottomHeader } from "@/components/shared/BottomHeader";
import PageHeader from "@/components/shared/PageHeader";
import Timeline from "@/components/timeline/TImeline";
import React from "react";

export const runtime = "edge";

const TimelinePage = () => {
  return (
    <>
      <NavigationBar />
      <PageHeader title="Historical Timeline" />
      <div className="lg:w-[70%] mx-auto p-4">
        <p className="text-sm">
          The R.J. O’Brien team’s dedication to excellence is over a century in
          the making. We are not only the first futures brokerage and clearing
          firm to achieve this milestone, but also the last surviving founding
          member of CME Group. RJO is thoroughly dedicated to this industry, and
          throughout our history we have worked tirelessly to meet our clients’
          needs.
        </p>
        <Timeline />
      </div>
      <BottomHeader />
      <Footer />
    </>
  );
};

export default TimelinePage;
