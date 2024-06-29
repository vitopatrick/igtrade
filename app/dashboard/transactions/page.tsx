import { getUser } from "@/actions/user";
import EmptyState from "@/components/empty-state/EmptyState";
import TransactionsList from "@/components/transactions-list/TransactionsList";
import { currentUser } from "@clerk/nextjs/server";

;

const TransactionsPage = async () => {
  const auth = await currentUser();
  let email = auth?.emailAddresses[0].emailAddress;

  const users: any = await getUser(email);

  const user = users[0];

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
