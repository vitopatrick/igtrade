import { getUser } from "@/actions/user";
import EmptyState from "@/components/empty-state/EmptyState";
import TransactionsList from "@/components/transactions-list/TransactionsList";
import { currentUser } from "@clerk/nextjs/server";

;

const TransactionsPage = async () => {
  const auth = await currentUser();

  const users: any = await getUser(auth?.id);
  const user = users[0];

  const transactions: any = user?.transactions;

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
