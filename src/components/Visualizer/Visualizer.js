import './Visualizer.scss';
import { Typography } from '@mui/material';
import React from 'react';
import Bar from '../Bar/Bar';

export default function Visualizer({ visualizerProps }){

    const algo = visualizerProps[0];
    const arraySize = visualizerProps[1];
    const barHeights = visualizerProps[2];
    const algoNames = ["", "Binary Sort", "Merge Sort", "Heap Sort", "Bubble Sort", "Binary Search"]
    const bars = []

    for(let i = 0; i<arraySize; i++){
        bars.push(<Bar barHeight={barHeights[i]}/>)
    }

    return(
       <div className="Visualizer__Box">
            <div>
                <Typography>
                    Use {algoNames[algo]} on an array of {arraySize} elements
                </Typography>
            </div>
            <div className="Visualizer__Bars">
                {bars}
                <div className="Bar" style={{height: 114, backgroundColor: "white"}}></div>
            </div>
        </div>
    );    
}

//so now we have the size variable and the algo variable
//using the size variable, generate an array with elements
//display the array in the format of rectangles on a graph next to each other
//using the algo variable, call the corresponding sort function
