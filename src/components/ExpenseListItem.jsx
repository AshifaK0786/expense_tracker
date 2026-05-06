const ExpenseListItem = (props) => {
  const { title, amount, _id } = props.expense;
  const type = amount > 0 ? "income" : "expense";
  
  const handleDelete = () => {
    props.deleteExpense(_id);
  };
  
  const handleEdit = () => {
    props.setItemToEdit(props.expense);
  };
  
  return (
    <div className={`expense-item ${type}`}>
      <div className="title">{title}</div>
      <div className="expense-amount">
        {type === "income" ? "+" : ""}{amount}
      </div>
      <div className="actions">
        <button
          onClick={handleEdit}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "0.75rem",
            background: "var(--primary)",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontWeight: "600",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 4px 12px rgba(99, 102, 241, 0.3)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "0.75rem",
            background: "var(--danger)",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontWeight: "600",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 4px 12px rgba(239, 68, 68, 0.3)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseListItem;
