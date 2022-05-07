import React from 'react'
import './index.css'

const Snake = (props) => {
    return (
        <div>
            {props.snakeDots.map((dot, i) => 
                <div className="snake-dot" key={i} style={{left: `${dot[0]}%`,top: `${dot[1]}%`}}></div>
            )}
        </div>
    )
}

export default Snake