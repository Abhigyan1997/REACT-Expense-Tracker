import {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const[isEditing,setIsEditing]=useState(false)

    const saveExpenseDateHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const saveEditingHandler=()=>{
        setIsEditing(true);
    }
    const stopEditingHAndler=()=>{
        setIsEditing(false);
    }

    return (<div className="new-expense">
       {!isEditing && <button onClick={saveEditingHandler}>Add New Expense</button>} 
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancel={stopEditingHAndler}/>}
    </div>)
}

export default NewExpense;