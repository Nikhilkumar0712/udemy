import React, {useState} from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'
const NewExpenses = (props) => {
  const [isEditing, setisEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseAmount) => {
    const Data = {
      ...enteredExpenseAmount,
      id : Math.random().toString()
    }
    props.onAddExpenses(Data);
  }
  const startEditingHandler=()=>{
    setisEditing(true)
  }
  const cancelhandler=()=>{
    setisEditing(false)
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} oncancel={cancelhandler}/>   }
    </div>
  )
}

export default NewExpenses