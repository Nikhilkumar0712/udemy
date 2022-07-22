import React from 'react'
import Comp2 from './Comp2'

const Comp1 = (props) => {
  
  return (
    <div>
      <h1>{props.title}</h1>
      <Comp2 title ={props.title}/>
    </div>
  )
}

export default Comp1