import React, { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id:'ed3',
      title: 'A toilet Paper',
      amount: 200,
      date: new Date(2023, 5, 18),
      location: "Bangalore,India"
    },
    {
      id:'es5',
      title: 'Insurance',
      amount: 1400,
      date: new Date(2023, 5, 11),
      location: "Mangalore,India"
    },
    {
      id:'ef7',
      title: 'Fuel',
      amount: 700,
      date: new Date(2023, 5, 12),
      location: "Dharamsala,India"
    },
    {
      id:'eo6',
      title: 'Food',
      amount: 500,
      date: new Date(2023, 5, 12),
      location: "Haridwar,India"
    }
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) =>
     [...prevExpenses, expense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
