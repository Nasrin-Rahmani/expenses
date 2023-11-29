import { useState } from "react";
import"./ExpenseForm.css"
export default function ExpenseForm(props){
    const [enterTitle, setTitle] = useState('');
    const [enteramount, setamount] = useState('');
    const [enterdate, setdate] = useState('');

    // const [userInput ,setData] = useState({
    //     enterTitle:'',
    //     enteramount:'',
    //     enterdate:''
    // });
    // const handleTitleChange =(event)=>{    
    //     setTitle(event.target.value); 
    // //    setData({
    // //     ...userInput,
    // //     enterTitle : event.target.value,
    // //    });
    // // setData[(previwesState)=>{
    // //     return{
    // //         ...previwesState,
    // //         enterTitle: event.target.value,
    // // }
    // // }]
    // // }
    // const handleamountChange =(event)=>{   
    //     setamount(event.target.value);   
    //     // setData({
    //     //     ...userInput,
    //     //     enteramount : event.target.value,
    //     //    });
    //  }
    //  const handledateChange =(event)=>{   
    //     setdate(event.target.value);   
    //     // setData({
    //     //     ...userInput,
    //     //     enterdate : event.target.value,
    //     //    });
    //  }
    
    const handliInputChange = (identifire, value)=>{
        if(identifire==='title'){
            setTitle(value);
            console.log(enterTitle)
        }else if (identifire==='amount'){
            setamount(value);
            console.log(enteramount);
        }else if (identifire==='date')
            setdate(value);
            console.log(enterdate);
    }
    const handleSubmetData = (event)=>{
       event.preventDefault();
       const expenseData = {
        title:enterTitle,
        amount:enteramount,
        date: new Date(enterdate)
       }
       props.onSaveExpenseData(expenseData);
       setTitle("");
       setamount("");
       setdate("");
    }
    return(
        <form onSubmit={handleSubmetData}>
           <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input type="text"  value ={enterTitle} onChange={(event)=>{handliInputChange('title',event.target.value)}}></input>
            </div>
            <div className="new-expense__control">
               <label>amount</label>
               <input type="number" value ={enteramount} onChange={(event)=>{handliInputChange('amount',event.target.value)}} min={0.01} step={0.01}></input>
            </div>
            <div className="new-expense__control">
               <label>date</label>
               <input type="date" value={enterdate} onChange={(event)=>{handliInputChange('date',event.target.value)}} min="2019-01-01" max="2022-12-29" ></input>
            </div>
           </div>
           <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}> Cancel </button>
            <button type="submit">Add Expense</button>
           </div>
        </form>
    )
    }