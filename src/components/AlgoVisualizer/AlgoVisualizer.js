import './AlgoVisualizer.scss'
import Selector from "../Selector/Selector";
import Visualizer from "../Visualizer/Visualizer";
import React from 'react';

export default function AlgoVisualizer(){
    
    const [visualizerProps, setVisualizerProps] = React.useState('')

    return (
        <div className="AlgoVisualizer">
            <Selector setVisualizerProps = {setVisualizerProps}/>
            <Visualizer visualizerProps = {visualizerProps}/>
        </div>
    )
}