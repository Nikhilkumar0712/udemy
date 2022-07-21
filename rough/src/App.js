import React from 'react'
import Comp1 from './Components/Comp1'
const App = () => {
  const expenses=[
    {
      content : "hello",
      surname : "kumar"
    },
    {
      content : "hello",
      surname : "kumar"
    }
  ]
  return (
    <div>
      <Comp1 title={expenses[0].content} name ={expenses[0].surname}/>
      <Comp1 title={expenses[1].content} name ={expenses[1].surname}/>
 
    </div>
  )
}

export default App