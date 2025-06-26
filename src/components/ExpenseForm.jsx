import {useState} from "react";
import { useEffect } from "react";
const ExpenseForm=(props)=>{
    const itemToEdit = props.itemToEdit;
    const [title,setTitle]=useState(props.itemToEdit?.title||"");
    const [amount,setAmount]=useState(props.itemToEdit?.amount||"");
    const [error,setError]=useState("");

    useEffect(()=>{
        if(props.itemToEdit){
            setTitle(props.itemToEdit.title);
            setAmount(props.itemToEdit.amount);
        }
    }   ,[itemToEdit])

    const isEdit = props.itemToEdit;

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title){
            setError("Enter title");
            return;
        }
        if(!amount){
            setError("Enter amount");
            return;
        }
        if(isEdit){
            props.editExpense(props.itemToEdit._id,title,amount);
           
            
        }
        else
        {
            props.addExpense(title,amount);
        }
        setError("")
        setTitle("")
        setAmount(0);
    };
    const handleTitleChange=(e)=>{
        setTitle(e.target.value);
    }
    const handleAmountChange=(e)=>{
        setAmount(e.target.value);
    }
    return(
        <div className="expense-form">
            <h3>{isEdit? "EDIT EXPENSE":"ADD EXPENSE"}</h3>
            {isEdit && <button  className="small-button"onClick={()=>props.setItemToEdit(null)}>Cancel Edit</button>}
            <form onSubmit={handleSubmit}>
                {error &&<div className="error">{error}</div>}
                
                <div className="form-group">
                    <label htmlFor="title">Title :</label>    
                    <input type="text" id="title" name="title"  value={title} onChange={handleTitleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount ($) :</label>    
                    <input type="number" id="amount" name="amount" value={amount} onChange={handleAmountChange} />
                </div>
                <br></br>
                <button type="submit">{isEdit? "EDIT EXPENSE":"ADD EXPENSE"}</button>
            </form>

        </div>
    )
}
export default ExpenseForm;