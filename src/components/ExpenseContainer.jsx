
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
        console.log('failed to fetch the expenes:',error);
    }
};
console.log(expense)
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
            console.error('FAiled to delete');
        }
    }catch{
        console.error('Error deleting expense',error);
    }
}
 const editExpense = async(id,title,amount) => {
        
        //     setExpenses(expenses.map((exp)=>{
        //         if(exp.id===id){
        //             return {id,title,amount}
        //         }

        //         return exp;
        //     }))
        
        // setItemToEdit(null);
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
            setExpense(expenses.map((exp) => (exp._id === id ? updatedItem : exp)));
        } else {
            console.log("Failed to update expense");
        }
    } catch(error) {
        console.error('Failed to edit expense', error);
    }
    // setItemToEdit(null);
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
        <h1>
            EXPENSE TRACKER
            <BalanceContainer expense={expense}/>
            <ExpenseForm  addExpense={addExpense}itemToEdit={itemToEdit} setItemToEdit={setItemToEdit}  editExpense={editExpense}/>
            <History  expense={expense} deleteExpense={deleteExpense} setItemToEdit={setItemToEdit}/>
            
        </h1>
        </div>
    )
}
export default ExpenseContainer;