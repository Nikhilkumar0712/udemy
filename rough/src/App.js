import React from 'react'
import Comp1 from './Components/Comp1'
import Comp3 from './Components/Comp3'
const App = () => {
  const expenses=[
    {
      name : "nikhil",
      age : 23,
      date : 23-23-2022
    },
    {
      name : "nikhil",
      age : 23,
      date : 23-23-2022
    },
    {
      name : "nikhil",
      age : 23,
      date : 23-23-2022
    },
  ]
  return (
    <div>
    
<Comp3 expenses={expenses} />
    </div>
  )
}

export default App