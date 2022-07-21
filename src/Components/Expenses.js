import React from 'react'

const Expenses = (props) => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14)
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 6, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28)
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12)
        },
    ];
    return (
        <div>
              <div className='expense-item__description'>
            <h2> {props.title} </h2>
        </div>
        <div className='expense-item__price'>{props.amount}</div>
        </div>
    )
}

export default Expenses