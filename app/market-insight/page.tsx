import Footer from "@/components/home/Footer";
import NavigationBar from "@/components/home/Nabar";
import { BottomHeader } from "@/components/shared/BottomHeader";
import PageHeader from "@/components/shared/PageHeader";
import Link from "next/link";
import React from "react";

const MarketInsightPage = () => {
  return (
    <>
      <NavigationBar />
      <PageHeader
        title="Market Insights"
        caption="Fundamental and technical market insights via commentary,
opinion and trade recommendations on futures and options"
      />
      <div className="lg:w-[50%] mx-auto p-4">
        {/* our place in the industry */}
        <div>
          <p className="text-sm leading-loose my-3">
            RJO Market Insights specializes in forward-thinking analysis,
            focused on potential market-moving events and dominant factors
            driving price discovery. Detailed fundamental and technical coverage
            across multiple commodity sectors is combined with
            objectively-constructed trade recommendations to provide an
            industry-leading product for R.J. O’Brien’s Institutional clients,
            commercial hedgers, introducing brokers and individual investors
            free of charge. Content is distributed in both text and audio
            formats, with specialized service offerings provided by account
            type.
          </p>

          <p className="text-sm leading-loose my-3">
            For more information on RJO Market Insights, contact your broker or
            RJO representative.
          </p>
        </div>
        <div>
          <h4 className="text-center font-bold py-3">
            Current RJO account holders can login below for complete access to
            RJO tools using a single username and password.
          </h4>
          <Link
            href="/sign-in"
            className="rounded-full p-4 bg-green-500 text-lg text-white block lg:w-[40%] mx-auto text-center"
          >
            Client Log In
          </Link>
        </div>
      </div>
      <BottomHeader title="Explore how RJO can be a partner on your futures journey." />
      <Footer />
    </>
  );
};

export default MarketInsightPage;
