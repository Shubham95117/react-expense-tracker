import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
const NewExpenses = (props) => {
  const[isEditing,setIsEditing]=useState(false);
    const saveExpenseDataHandler=(formData)=>{
        const expData={...formData,id:Math.random().toString()};
        props.onAddExpense(expData);
        setIsEditing(false);
    }
  return (
    <div className='new-expense'>
      {
        !isEditing&&<button onClick={()=>setIsEditing(true)}>Add Expense</button>
      }
      {
        isEditing&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={()=>setIsEditing(false)}/>
      }
      
    </div>
  )
}

export default NewExpenses
