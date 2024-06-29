import TransactionsTable from "@/components/admin/TransactionsTable";
import UsersTable from "@/components/admin/UsersTable";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Summary Transactions, */}
      <div className="col-span-2 h-full">
        <TransactionsTable />
      </div>
      {/* Summary Users */}
      <div className="h-full">
        <UsersTable />
      </div>
    </div>
  );
};

export default HomePage;
