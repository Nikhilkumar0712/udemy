import React from 'react'
import Comp2 from './Comp2'
const Comp1 = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <h1>{props.year}</h1>
        {/* <Comp2 date={props.date}/> */}
    </div>
  )
}

export default Comp1