import { DepositFaq } from "@/components/deposits/DepositFaq";
import DepositForm from "@/components/deposits/DepositForm";
import DepositList from "@/components/deposits/DepositList";

const DepositPage = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4">
        <DepositForm />
        <DepositFaq />
      </div>
      <DepositList />
    </div>
  );
};

export default DepositPage;
