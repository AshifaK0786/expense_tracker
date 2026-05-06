
import BalanceContainer from "./BalanceContainer";
import ExpenseForm from "./ExpenseForm";
import History from "./History";
import {useEffect, useState} from "react";

const ExpenseContainer =()=>{
const [expense,setExpense]=useState([]);
const [itemToEdit,setItemToEdit]=useState(null);
const fetchExpenses=async()=>{
    try{
        const response=await fetch('http://localhost:3000/expense');
        const data=await response.json();
        setExpense(data);
    }
    catch(error){
        console.error('failed to fetch the expenses:',error);
    }
};
useEffect(()=>{
    fetchExpenses();
},[]);
const addExpense=async(title,amount)=>{
    try{
        const response=await fetch('http://localhost:3000/expense',{
            method:'POST',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify({title,amount})
        })
        if(response.ok){
            const newItem=await response.json();
            setExpense((prev)=>[...prev,newItem]);
            setItemToEdit(null);
        }else{
            console.error('failed to add expense');
        }
    }catch(error){
        console.error('Error adding expense',error);
    }
};
const deleteExpense=async(id)=>{
    try{
        const response=await fetch(`http://localhost:3000/expense/${id}`,{
            method:'DELETE',
        });
        if(response.ok){
            await fetchExpenses();
        }else{
            console.error('Failed to delete');
        }
    }catch(error){
        console.error('Error deleting expense',error);
    }
}
const editExpense = async(id,title,amount) => {
    try {
        const response = await fetch(`http://localhost:3000/expense/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, amount }),
        });
        if (response.ok) {
            const updatedItem = await response.json();
            setExpense((prevExpense) => prevExpense.map((exp) => (exp._id === id ? updatedItem : exp)));
            setItemToEdit(null);
        } else {
            console.error("Failed to update expense");
        }
    } catch(error) {
        console.error('Failed to edit expense', error);
    }
}


//console.log('itemToEdit',itemToEdit)
//console.log(itemToEdit)
    /*const addExpense=(title,amount)=>{
        setExpense([
            ...expense,
            {
                id: uid(),
                title,
                amount,
            },
        ]);
    }*/
    
    
    return(
        <div className="expense-container">
        <h1>Expense Tracker</h1>
        <BalanceContainer expense={expense}/>
        <ExpenseForm  addExpense={addExpense}itemToEdit={itemToEdit} setItemToEdit={setItemToEdit}  editExpense={editExpense}/>
        <History  expense={expense} deleteExpense={deleteExpense} setItemToEdit={setItemToEdit}/>
        </div>
    )
}
export default ExpenseContainer;
