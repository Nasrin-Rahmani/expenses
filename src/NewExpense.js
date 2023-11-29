import ExpenseForm from "./EppenseForm"
import"./NewExpense.css"
import React from "react"
import { useState } from "react"

export default function NewExpense(props){
    const [isOpen , setOpen] = useState(false);
    const saveExpenseData = (data)=>{
        const newExpense={...data,id:Math.random().toString()}
        props.onSaveNewExpenseData(newExpense);
        setOpen(false);
    }
    const handleIsOpen =()=>{
        setOpen(
            isOpen ? false : true
            );
    }
    
    const handleCancel = () =>  {
        setOpen(false);
    }
    return(
        <div className="new-expense">
            {!isOpen &&(
                <button onClick={handleIsOpen}> Add New Expense</button>
            )}
            {isOpen && (
            <ExpenseForm onCancel={handleCancel} onSaveExpenseData= {saveExpenseData}></ExpenseForm>
        )}
        </div>
    )
}