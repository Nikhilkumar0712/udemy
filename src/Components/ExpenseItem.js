import React, {useState} from 'react'
import ExpenseDate from './ExpenseDate'
import '../Css files/ExpenseItem.css'
import Card from './Card'
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const Change =()=>{
    setTitle('updated')
    console.log(title);
  }
  return (
    <>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2> {title} </h2>
        <div className='expense-item__price'>{props.amount}</div>
        </div>
        <button onClick={Change}>Change</button>
      </Card>
    </>

  )
}

export default ExpenseItem