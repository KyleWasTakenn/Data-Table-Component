import { accounts } from "@/accounts";
import { columns } from "./columns";
import AccountsDataTable from "./data-table";

type Props = {};

const Accounts = (props: Props) => {
  return <AccountsDataTable columns={columns} data={accounts} />;
};

export default Accounts;
