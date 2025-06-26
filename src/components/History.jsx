import ExpenseListItem from "./ExpenseListItem";
const History=(props)=>{
    const {expense} =props;
    return (
        <div className="History">
            HISTORY OF TRACKING
            {expense.map((expense)=>( <ExpenseListItem key={expense._id} expense={expense} 
            deleteExpense={props.deleteExpense} setItemToEdit={props.setItemToEdit}/>))}
        </div>
    )
}
export default History;