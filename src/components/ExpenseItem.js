import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2023, 5, 17);
    const expenseDetails = "Insurance";
    const expenseAmount = 100;
    const locationOfExpense = "Bangalore,India";
    return (<div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseDetails}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
            <div>{locationOfExpense}</div>
        </div>
    </div>)
}

export default ExpenseItem;