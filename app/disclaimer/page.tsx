import Footer from "@/components/home/Footer";
import NavigationBar from "@/components/home/Nabar";
import { BottomHeader } from "@/components/shared/BottomHeader";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const DisclaimerPage = () => {
  return (
    <>
      <NavigationBar />
      <PageHeader title="Disclaimer" />
      <div className="lg:w-[50%] mx-auto p-4">
        {/* our place in the industry */}
        <div>
          <p className="text-sm leading-loose my-3">
            This information is not to be construed as an offer to sell or a
            solicitation or an offer to buy the commodities herein named. The
            factual information of this report has been obtained from sources
            believed to be reliable, but is not necessarily all-inclusive and is
            not guaranteed as to the accuracy, and is not to be construed as
            representation by R.J.O’Brien. The risk of trading futures and
            options can be substantial. Each investor must consider whether this
            is a suitable investment. Past performance is not indicative of
            future results.
          </p>
          <h4 className="text-center font-bold py-3">
            Special Disclaimer for New Account Applicants
          </h4>
          <p className="text-sm leading-loose my-3">
            Account documents are not an offer of solicitation for the purchase
            or sale of any Commodity. Before trading one should be aware that
            with potential profits there is also potential for losses that may
            be very large. Futures investing involves risk and is not suitable
            for everyone. Those acting on this information are responsible for
            their own actions.
          </p>
        </div>
        <div>
          <h4 className="text-center font-bold py-3">
            Attention Non-U.S. Residents
          </h4>
          <p className="text-sm leading-loose my-3">
            The services provided by R.J.O’Brien (“RJO”) may not be available in
            all jurisdictions. It is possible that the country in which you are
            a resident prohibits us from opening and maintaining an account for
            you. If in doubt, please contact an RJO account representative.
          </p>
        </div>
        <div>
          <h4 className="text-center font-bold py-3">Account Information</h4>
          <p className="text-sm leading-loose my-3">
            Account information contained within this website is calculated
            using the most recent transaction and price information available.
            Based on market conditions, valuations can be based off real or
            theoretical pricing, and do not include any fees or commissions
            which are calculated during nightly processing. As such, R.J.
            O’Brien cannot give any assurance that such information is accurate,
            complete or current at all times. We make no representations or
            warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability or availability with respect to
            the website or the information, products, services, or related
            graphics contained on the website for any purpose. Any reliance you
            place on such information is therefore strictly at your own risk.
            This information is subject to change without notice, and as such
            R.J. O’Brien will not under any circumstances be liable for any loss
            or damage including, without limitation, indirect or consequential
            loss or damage, or any loss or damage whatsoever arising from loss
            of data or profits arising out of, or in connection with, the use of
            this website.
          </p>
          <p className="text-sm leading-loose my-3">
            Profit and Loss information is believed to be an accurate reflection
            of the customer’s performance, but should not be relied upon for tax
            reporting or other critical processes. Differences can be caused by,
            but not limited to, activity such as trades settling in non-USD
            currency, account transfers, and the addition or removal of active
            sub-accounts from masters.”
          </p>
          <p className="text-sm leading-loose my-3">
            Market Insights material has been prepared by a sales or trading
            employee or agent of R.J. O’Brien and is, or is in the nature of, a
            solicitation. This material is not a research report prepared by
            R.J. O’Brien’s Research Department. By accepting this communication,
            you agree that you are an experienced user of the futures markets,
            capable of making independent trading decisions, and agree that you
            are not, and will not, rely solely on this communication in making
            trading decisions.
          </p>
        </div>
      </div>
      <BottomHeader title="Connect with RJO today!" />
      <Footer />
    </>
  );
};

export default DisclaimerPage;
