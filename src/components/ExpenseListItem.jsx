const ExpenseListItem=(props)=>{
    //const {expense}=props;
    const {title,amount,_id}=props.expense;
    const type=amount>0?"income":"expense";
    const handleDelete =()=>{
        props.deleteExpense(_id);
    };
    const handleEdit=()=>{
        props.setItemToEdit(props.expense);
    }
    return(
        <div className={`expense-item ${type}`}>
            <div className="expense-title">{props.expense.title}</div>
            <div className="expense-amount">{props.expense.amount}</div>
            <div className="deletebutton">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}
export default ExpenseListItem;