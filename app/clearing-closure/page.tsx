import Footer from "@/components/home/Footer";
import NavigationBar from "@/components/home/Nabar";
import { BottomHeader } from "@/components/shared/BottomHeader";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

;

const ClearingClosure = () => {
  return (
    <>
      <NavigationBar />
      <PageHeader title="Clearing Criteria Disclosures" />
      <div className="lg:w-[50%] mx-auto p-4">
        {/* our place in the industry */}
        <div>
          <p className="text-sm leading-loose my-3">
            R.J. O’Brien provides clearing services to various types of
            customers including corporations, agricultural firms and other
            hedgers, hedge funds and institutional asset managers and
            individuals.
          </p>
          <p className="text-sm leading-loose my-3">
            In determining whether to offer clearing services to prospective
            customers, R.J. O’Brien considers objective criteria including,
            without limitation, the customer’s investment profile, financial
            health, legal character, industry reputation and the relevant legal
            and commercial terms and, where required, the customer’s status as
            an Eligible Contract Participant (as such term is defined in the
            Commodity Exchange Act).
          </p>
        </div>
      </div>
      <BottomHeader title="Connect with RJO today!" />
      <Footer />
    </>
  );
};

export default ClearingClosure;
