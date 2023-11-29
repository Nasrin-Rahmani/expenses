import ExpenseItem from "./ExpenseItem";
import"./Expenses.css"
import "./ExpenseDate.css"
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) =>{
    const [mySelectedYear, setSelectedYear] = useState('2019');
    let infoText = '2020 , 2021 & 2022' ;
      
    if(mySelectedYear==='2020'){
        infoText = ('2019, 2021 & 2022');
    }else if(mySelectedYear==='2021'){
        infoText = ('2019, 2020 & 2022'); 
    }else if (mySelectedYear==='2022'){
        infoText = ('2019, 2020 & 2021')
    }

      const getData = selectedYear => {
        setSelectedYear(selectedYear);
    } 
    const filteredExpenses =props.items.filter((filterExpense)=>{
        return mySelectedYear=== filterExpense.date.getFullYear().toString();
    });
    
      
    return(
        <div>
        <Card className="expenses">

                <ExpensesFilter selectedYear={mySelectedYear}onGetData={getData}></ExpensesFilter>
                 <p>The data for years {infoText} is hidden</p>
                 <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                 {/* {filteredExpenses.length === 0 && <p> No data exist😕!</p>} */}
                 <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
                 
                 {/* <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount}></ExpenseItem>
            
                <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount}></ExpenseItem>
            
                <ExpenseItem title={props.items[2].title} date={props.items[2].date} amount={props.items[2].amount}></ExpenseItem>
           
                <ExpenseItem title={props.items[3].title} date={props.items[3].date} amount={props.items[3].amount}></ExpenseItem> */}
             
        </Card>
        </div>
    );
};
export default Expenses;