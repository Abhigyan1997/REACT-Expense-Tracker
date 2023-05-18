import './ExpenseDate.css'

function expenseDate(props) {
    const date = new Date(props.date);
    const day = date.toLocaleString('en-US', { day: 'numeric' });
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();

    return (<div className="expense-date">
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
    </div>)
}

export default expenseDate;