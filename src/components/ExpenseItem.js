
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';


const ExpenseItem=(props) => {
    const clickHandler=()=>{
        console.log("Clicked!!!")
    }
    const deleteExpenseHandler = () => {
        // Remove the expense item from the DOM
        const expenseItem = document.querySelector('.expense-item');
        expenseItem.remove();
      };
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <div>{props.location}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteExpenseHandler}>Delete Expense</button>
        </div>
    );
}

export default ExpenseItem;
