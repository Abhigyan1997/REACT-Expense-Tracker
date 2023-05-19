import Card from'./UI/Card'

const ExpenseDetails=(props)=> {
    return (
      <Card className="expense-details">
        <h2>{props.title}</h2>
        <div className="expense-details__amount">${props.amount}</div>
        <div>{props.location}</div>
      </Card>
    );
  }
  
  export default ExpenseDetails;