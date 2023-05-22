import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses = [
    {
      title: 'A toilet Paper',
      amount: 200,
      date: new Date(2023, 5, 18),
      location: "Bangalore,India"
    },
    {
      title: 'Insurance',
      amount: 1400,
      date: new Date(2023, 5, 11),
      location: "Mangalore,India"
    },
    {
      title: 'Fuel',
      amount: 700,
      date: new Date(2023, 5, 12),
      location: "Dhramsala,India"
    },
    {
      title: 'Food',
      amount: 500,
      date: new Date(2023, 5, 12),
      location: "Haridwar,India"
    }
  ];
  return (
    <div >
     <NewExpense/>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
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
