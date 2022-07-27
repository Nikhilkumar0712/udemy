import React, { useState } from 'react'
import '../Css files/expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import ExpensesFilter from '../Components/NewExpenses/ExpenseFilter'
import ExpensesList from './NewExpenses/ExpensesList'
import Chart from './Charts/Chart'
import ExpenseChart from './NewExpenses/ExpenseChart'
const Expenses = (props) => {
    const [ChangefilterData, setChangefilterData] = useState('2020')
    const filterData = (expenseFilterData) => {
        setChangefilterData(expenseFilterData);
    }
    const filterItems = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === ChangefilterData
    })

    
    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter selected={ChangefilterData} onsaveData={filterData} />
              <ExpenseChart expenses={filterItems}/>
               <ExpensesList items={filterItems }/>
            </Card>
        </>
    )
}

export default Expenses