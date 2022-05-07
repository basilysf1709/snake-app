import React from 'react'

const Food = (props) => {
  return (
    <div className="snake-food" style={{left: `${props.dot[0]}%`, top: `${props.dot[1]}%`}}></div>
  )
}

export default Food