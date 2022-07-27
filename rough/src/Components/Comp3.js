import React from 'react'
import Comp1 from './Comp1'
const Comp3 = (props) => {
  return (
    <div>
       <Comp1 title={props.expenses[0].name} year={props.expenses[0].age} date={props.expenses[0].date}/>
     <Comp1 title={props.expenses[1].name} year={props.expenses[1].age} date={props.expenses[1].date}/>
     <Comp1 title={props.expenses[2].name} year={props.expenses[2].age} date={props.expenses[2].date}/>
    </div>
  )
}

export default Comp3