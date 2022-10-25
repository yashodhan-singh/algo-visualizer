import './Bar.scss'
import React from 'react'

export default function Bar({ barHeight }){

    const randomizeBars = (event) => {
        alert('hello')
    }

    return(
        <div className="Bar" style={{height: (barHeight*10)+10}}>
            {barHeight}
        </div>
    )

}