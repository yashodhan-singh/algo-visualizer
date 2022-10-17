import './AlgoVisualizer.scss'
import Selector from "../Selector/Selector";
import Visualizer from "../Visualizer/Visualizer";
import React from 'react';

class AlgoVisualizer extends React.Component {

    state = { data: [10, 1] }

    render(){
        return (
            <div className="AlgoVisualizer">
                <Selector/>
                <Visualizer dataFromParent = {this.state.data}/>
            </div>
        )
    }
}
 export default AlgoVisualizer;