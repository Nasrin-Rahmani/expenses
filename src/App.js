import React from "react";
import Expenses from "./Expenses";
import "./ExpenseDate.css"
import"./ExpenseItem.css"
import NewExpense from "./NewExpense";
import { useState } from "react";
import Alert from "./Alert";
const INTIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'HP Printer',
    amount: 117.23,
    date: new Date(2020, 6, 11),
  },
  { 
    id: 'e2',
   title: 'Fridge', 
   amount: 899.99, 
   date: new Date(2022, 9, 6) },
  {
    id: 'e3',
    title: 'Pack of Chairs',
    amount: 313.12,
    date: new Date(2022, 12, 1),
  },
  {
    id: 'e4',
    title: 'Personal Computer (Dell)',
    amount: 1250,
    date: new Date(2021, 2, 14),
  
  },
];

function App(){
    const [expenses , setNewExpenses] = useState(INTIAL_EXPENSES)
    const saveNewData=(newExpense)=>{
  setNewExpenses([newExpense, ...expenses])
  }
  return(
    <div>
      <NewExpense onSaveNewExpenseData={saveNewData}></NewExpense>
        <Expenses items={expenses}></Expenses>
      <Alert></Alert>  
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
export default App;