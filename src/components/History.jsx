import ExpenseListItem from "./ExpenseListItem";

const History = (props) => {
  const { expense } = props;
  
  return (
    <div className="History">
      <h3>Transaction History</h3>
      {expense.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
          No transactions yet. Add your first expense or income!
        </p>
      ) : (
        expense.map((exp) => (
          <ExpenseListItem
            key={exp._id}
            expense={exp}
            deleteExpense={props.deleteExpense}
            setItemToEdit={props.setItemToEdit}
          />
        ))
      )}
    </div>
  );
};

export default History;
