import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Expenses from './Expenses'
const ExpenseItem = (props) => {

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <Expenses title={props.title} amount={props.amount}/>
    </div>
  )
}

export default ExpenseItem