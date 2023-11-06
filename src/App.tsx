import { accounts } from "./accounts";
import { columns } from "./accounts/columns";
import AccountsDataTable from "./accounts/data-table";

/* 
TODO:
- Card container behind table
- Pages for table
- Filter options
- Search bar
- Show / hide / copy password buttons for each password entry

- Add password area / button 
    - An "Add account" button that brings up a popup?
    - Persistent "service, email, username, password" with an add button above table card/container?
*/

function App() {
  return (
    <>
      <div className="container py-10 mx-auto">
        <AccountsDataTable columns={columns} data={accounts} />
      </div>
    </>
  );
}

export default App;
