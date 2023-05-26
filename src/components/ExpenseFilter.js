import React from "react";

const expenseFilter = (props) => {
    const dropDownChangehandler = (event) => {
        props.onChangeFilter(event.target.value);

    }
    return (<div>
        <div>
            <label>Filter by label</label>
            <select value={props.selected} onChange={dropDownChangehandler}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
    </div>)
}

export default expenseFilter;