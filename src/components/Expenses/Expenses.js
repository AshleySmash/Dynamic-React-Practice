// import ExpenseItem from "./ExpenseItem";
// Third way ^^^
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./ExpensesList";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // filter() takes a function and will filter the date
  const filterExpenses = props.items.filter((expense) => {
    // this turns the date into a string and then we compare it to the filteredYear in the array destructor
    // getFullYear() makes it so it didplays 2024 istead of 24 is a built in JavaScript funtion along with toString
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // ---------------------- THIRD WAY --------------------- Probably Best Way
  // this way you use regualar JavaScript makes it slightly cleaner than the other ways
  /* let exppensesContent = <p>No expenses found.</p>;

  if (filterExpenses.length > 0) {
    exppensesContent = filterExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  } */

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesChart expenses={filterExpenses}/>

      {/* Use this code below to call the empty output from the ExpensesList.js */}
      <ExpensesList items={filterExpenses} />
      

      {/* CAN'T USE FOR or IF statements in the return statements */}
      {/* ---------------------- FIRST WAY -------------------------- An OKAY way to do it
       to display an empty data feild Turnary Expression it allows us to do conditional content with a specific opperator. The ? represents the "if it is equal to 0 then output a paragraph" the : represents the else statement 
  for the else statment if it isn't equal to 0 then it displays the data as normal*/}
      {/* {filterExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filterExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
      {/* ----------------- SECOND WAY ------------------ A BETTER Way 
        To Display A message of an empty data set Split the Turnary Expression
        instead of an ? use && and make it two && expressions instead of just one */}
      {/* {filterExpenses.length === 0 && <p>No expenses found.</p>}
        {filterExpenses.length > 0 && 
        filterExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* ---------------------- THIRD WAY --------------------- Probably Best 
      the other parts to the third way are above*/}
      {/* {exppensesContent} */}

    </Card>
  );
};

export default Expenses;

//  /* creating Dynamic List  we use items because that is what we pass down from the app.js file and that is how we access the data*/
// /* Map allows us to create a new array that is based on another array which transformes every element of that array *
// /* map() takes a function as the parameter you can call what you put in () whatever you like */
// /* {props.items.map((expense) => )} this displays all the data, but the filter doesn't work  */
// {filterExpenses.map((expense) => (
//   <ExpenseItem
//     /*  // key is a property that can be added to any componenet. KEYS helps with effciency in REACT apps, BUT also helps REACT identify indivdual items
//     // ALWAYS USE KEY WHEN MAPING OUT A LIST OF ITEMS */
//     /* filteredExpenses displays data based on year, with the default year that it displays being 2024 */
//     key={expense.id}
//     title={expense.title}
//     amount={expense.amount}
//     date={expense.date}
//   />
// ))}
// /* expense function tells map that we want to create a new expenseItem with the props data doing it this way creates a new ExpenseItem everytime there is a new array element */
