import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const[expenses,setExpenses]=useState( [
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2025, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2024, 9, 17), price: 200 },
    { id: 5, title: "Laptop2", date: new Date(2024, 9, 17), price: 300 },
    { id: 6, title: "Book2", date: new Date(2024, 9, 17), price: 200 },
    { id: 7, title: "Laptop3", date: new Date(2024, 9, 17), price: 200 },
    { id: 7, title: "Sack", date: new Date(2023, 9, 17), price: 200 },
    { id: 8, title: "Sack", date: new Date(2023, 9, 17), price: 200 },
  ])
  
  const addExpenseHandler=(newExpenses)=>{
    console.log(newExpenses);
    setExpenses((prevExpenses)=>{
      return[newExpenses,...prevExpenses]
    })

  }
  return (
    <div>
     <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
