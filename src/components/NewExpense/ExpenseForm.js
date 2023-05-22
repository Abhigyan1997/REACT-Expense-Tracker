import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = () => {
    const [enterdTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData={
            title:enterdTitle,
            amount:enterdAmount,
            date:new Date(enterdDate)
        }
        console.log(expenseData);
    }

    return (<form onSubmit={submitHandler}>
        <div className="new-expense__control">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" onChange={dateChangeHandler} />
            </div>
        </div>
        <div>
            <button type="submit">Add Expense</button>
        </div>
    </form>)
}

export default ExpenseForm;