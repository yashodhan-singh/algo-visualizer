import './Bar.scss'
import React from 'react'

export default function Bar({ barHeight }){

    return(
        <div className="Bar" style={{height: (barHeight*10)+10}}>
            {barHeight}
        </div>
    )

}