import Footer from "@/components/home/Footer";
import NavigationBar from "@/components/home/Nabar";
import { BottomHeader } from "@/components/shared/BottomHeader";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

export const runtime = "edge";

const CopyrightPage = () => {
  return (
    <>
      <NavigationBar />
      <PageHeader title="Copyright" />
      <div className="lg:w-[50%] mx-auto p-4">
        {/* our place in the industry */}
        <div>
          <p className="text-sm leading-loose my-3">
            Unless otherwise noted, all content on this website, including, but
            not limited to, text, graphics, audio clips, videos, television
            clips, logos, buttons, images, digital downloads, data compilations,
            analysis, icons, html code and xml code, is the property of R.J.
            O’Brien & Associates, LLC, its content vendors, or other third
            parties and is protected by U.S. and international copyright laws.
          </p>
          <p className="text-sm leading-loose my-3">
            The compilation of all content on this website is the exclusive
            property of R.J. O’Brien & Associates, LLC or its content vendors
            and is protected by U.S. and international copyright laws.
          </p>
          <p className="text-sm leading-loose my-3">
            All software used on this website is the exclusive property of R.J.
            O’Brien & Associates, LLC or its software suppliers and is protected
            by U.S. and international copyright laws as well as other laws.
          </p>
          <p className="text-sm leading-loose my-3">
            If you believe any material available through this website infringes
            a copyright, you should notify R.J. O’Brien & Associates, LLC as
            described below:
          </p>
          <div>
            <p className="font-bold text-sm my-2">Address:</p>
            <div className="text-sm space-y-3">
              <p className="font-bold">Legal Department</p>
              <p>R.J. O’Brien & Associates, LLC</p>
              <p className="text-green-500">+1 312-682-2127</p>
            </div>
          </div>
        </div>
      </div>
      <BottomHeader title="Connect with RJO today!" />
      <Footer />
    </>
  );
};

export default CopyrightPage;
