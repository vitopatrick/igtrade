import Footer from "@/components/home/Footer";
import NavigationBar from "@/components/home/Nabar";
import { BottomHeader } from "@/components/shared/BottomHeader";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <NavigationBar />
      <PageHeader
        title="about"
        subtitle="About R.J. O’Brien"
        caption="R.J. O’Brien is the oldest and largest independent futures brokerage and clearing firm in the United States.

"
      />
      <div className="lg:w-[50%] mx-auto p-4">
        {/* about  */}
        <div>
          <h4 className="text-center font-bold py-3">About R.J. O’Brien</h4>
          <p className="text-sm leading-loose my-3">
            R.J. O’Brien & Associates, LLC is the oldest and largest independent
            futures brokerage and clearing firm in the United States. A futures
            commission merchant (FCM), RJO is a full clearing member of: the CME
            Group (founding member of the Chicago Mercantile Exchange) and all
            its markets; IntercontinentalExchange (ICE) and the CBOE Futures
            Exchange (CFE).
          </p>
          <p className="text-sm leading-loose my-3">
            RJO offers the state-of-the-art in order entry technology coupled
            with 24-hour execution and clearing on every futures exchange
            worldwide. Clearing more than 80,000 client accounts, the firm
            provides a full range of services to the industry’s largest global
            network of introducing brokers (IBs) and to commercial,
            institutional, international and{" "}
            <span className="text-green-500 font-bold">
              individual investors
            </span>
             . These include more than 300 IBs and many of the world’s largest
            financial, industrial and agricultural institutions. We do not
            engage in speculative proprietary trading; all of our business
            focuses on our valued clients.
          </p>
          <a
            href="chrome-extension://gphandlahdpffmccakmbngmbjnjiiahp/https://www.rjobrien.com/wp-content/uploads/2022/09/US-Corporate-Brochure-FOR-PRINT_Updated-Fall-2022..pdf"
            download
            target="_blank"
            className="bg-green-600 p-4 rounded-full  text-white text-center block lg:w-[40%] mx-auto w-full"
          >
            Download Corporate Brochure
          </a>
        </div>
        {/* our place in the industry */}
        <div>
          <h4 className="text-center font-bold py-3">
            Our Place in the Industry
          </h4>
          <p className="text-sm leading-loose my-3">
            Founded in 1914, RJO is one of the last ’boutique’ futures firms in
            the industry. It is a privately held business majority owned by the
            O’Brien family of Chicago. The O’Brien’s have been instrumental in
            the development of the futures industry and remain committed to the
            continued growth of the company and our leadership within the
            industry.
          </p>
          <p className="text-sm leading-loose my-3">
            With client assets of approximately $4 billion, RJO is a
            well-diversified, fully integrated FCM. The firm regularly captures
            top-tier market share in both agricultural and financial futures
            products at both the CME and CBOT.
          </p>
        </div>

        {/* mission */}
        <div>
          <h4 className="text-center font-bold py-3">Our Mission</h4>
          <p className="text-sm leading-loose my-3">
            R.J. O’Brien provides our clients with value-added trade
            information, efficient execution, accurate and prompt reporting,
            resourceful compliance support, and comprehensive risk management to
            assure the safety of our clients’ assets, as well as the capital
            base of the firm.
          </p>
        </div>
        {/* dedication */}
        <div>
          <h4 className="text-center font-bold py-3">Our Dedication</h4>
          <p className="text-sm leading-loose my-3">
            Through bull and bear markets, political instability, economic
            triumphs and hardships, the longevity of R.J. O’Brien is a testament
            to the focus we place on our customers. We must continuously adapt
            and respond to the ever-changing needs of our valued clients. We are
            a leader in developing new technologies and forging strategies that
            help our clients succeed. This is why countless users of the futures
            markets rely on R.J. O’Brien as a partner in building their
            business.{" "}
          </p>
          <p className="text-sm leading-loose my-3">
            R.J. O’Brien is committed to people, ideas, vision and leadership.
            We continue our journey with great enthusiasm for the bright future
            that lies ahead.{" "}
          </p>
        </div>
      </div>
      <BottomHeader />
      <Footer />
    </>
  );
};

export default AboutPage;
