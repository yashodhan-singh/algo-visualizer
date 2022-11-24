import './AlgoVisualizer.scss'
import Selector from "../Selector/Selector";
import Visualizer from "../Visualizer/Visualizer";
import React from 'react';

export default function AlgoVisualizer(){
    
    const [visualizerProps, setVisualizerProps] = React.useState(1,10,[1,2,3,4,5,6,7,8,9,10])

    return (
        <div className="AlgoVisualizer">
            <Selector setVisualizerProps = {setVisualizerProps}/>
            <Visualizer visualizerProps = {visualizerProps}/>
        </div>
    )
}