import React from 'react'

const Comp2 = (props) => {
  const month =props.date.toLocaleString('en-us', {month : "long"})
  return (
    <div>
      {month}
    </div>
  )
}

export default Comp2