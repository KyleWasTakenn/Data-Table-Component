import { accounts } from "./accounts";
import { columns } from "./accounts/columns";
import AccountsDataTable from "./accounts/data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle className="text-center uppercase font-semibold tracking-widest">
              Placeholder title
            </CardTitle>
            <CardDescription className="text-center uppercase font-thin tracking-widest">
              Welcome, user
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AccountsDataTable columns={columns} data={accounts} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;
