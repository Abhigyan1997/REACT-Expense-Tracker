import React from "react";
import './ExpenseForm.css'
const ExpenseForm = () => {
    const titleChangeHandler=(event)=>{
console.log(event.target.value);
    }
    return (<form>
        <div className="new-expense__control">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"/>
            </div>
        </div>
        <div>
            <button type="submit">Add Expense</button>
        </div>
    </form>)
}

export default ExpenseForm;