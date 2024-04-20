import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
const NewExpenses = (props) => {
    const saveExpenseDataHandler=(formData)=>{
        const expData={...formData,id:Math.random().toString()};
        props.onAddExpense(expData);
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpenses
