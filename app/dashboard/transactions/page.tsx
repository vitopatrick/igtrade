import { getUser } from "@/actions/user";
import EmptyState from "@/components/empty-state/EmptyState";
import TransactionsList from "@/components/transactions-list/TransactionsList";

const TransactionsPage = async () => {
  const user: any = await getUser();

  const transactions = user.transactions;

  return (
    <div>
      <div>
        {/* transactions list */}
        {transactions?.length < 1 ? <EmptyState /> : <TransactionsList />}
      </div>
    </div>
  );
};

export default TransactionsPage;
