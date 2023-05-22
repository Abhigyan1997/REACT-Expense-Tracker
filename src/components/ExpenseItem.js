import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('100$');
        console.log(title); // Log the updated value of title
    };

    const deleteExpenseHandler = () => {
        const expenseItem = document.querySelector('.expense-item');
        expenseItem.remove();
    };

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <div>{props.location}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteExpenseHandler}>Delete Expense</button>
        </div>
    );
};

export default ExpenseItem;
