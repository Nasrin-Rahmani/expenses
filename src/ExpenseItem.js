import { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"


const ExpenseItem = ({date,title,amount}) =>{
    let [newtitle, settitle]= useState(title); 
    const handleClicked = ()=>{
        settitle("Updated");
        
       
    }
    return(
        <li>
        <Card className = ' expense-item '>
            <ExpenseDate date={date}></ExpenseDate>
            <div className = 'expense-item__description'>
            <h2>{newtitle}</h2>
            <div className='expense-item__price'> 
            {amount} $
            </div>
        </div>
        <button onClick={handleClicked}>change title</button>
        </Card>
        </li>
    );
};
export default ExpenseItem;