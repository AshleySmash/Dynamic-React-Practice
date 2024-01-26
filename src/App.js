import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

// key is a property that can be added to any componenet. KEYS helps with effciency in REACT apps, BUT also helps REACT identify indivdual items



const DUMMY_EXPENSES = [
  // changed to DUMMY_EXPENSES because we are still using the data, but it is static and can't be changed
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // prev is a variable that passes the previous data variables
    setExpenses((prevExpenses) => {
      // the existing expenses are pullout with prevExpenses and the new is add with expense
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

/* 
Git Commands Reminder
git add -A
git commit -am "commit message"
git push 
*/
