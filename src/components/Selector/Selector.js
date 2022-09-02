import './Selector.scss';
import Slider from '../Slider/Slider';

function Selector(){
    return(
        <div className = "Selector">
            <p className = "Instructions">
                Choose your starting array size
            </p>
            <div>
                <Slider/>
            </div>


            <button className="Selector__Button" type="button">Generate Array</button>
            <p className = "Instructions">
                Select a sorting algorithm
            </p>


            <div className = "DropDown">
                <select>
                    <optgroup label="Logarithmic">
                        <option value = "QuickSort"> Quick Sort </option>
                        <option value = "HeapSort"> Heap Sort </option>
                        <option value = "MergeSort"> Merge Sort </option>
                    </optgroup>
                    <optgroup label="Quadratic">
                        <option value = "BubbleSort"> Bubble Sort </option>
                        <option value = "SelectionSort"> Selection Sort </option>
                        <option value = "InsertionSort"> Insertion Sort </option>
                    </optgroup>
                </select>
                <button className="Selector__Button__Sort" type="button"> Go </button>
            </div>
        </div>
    );
}

export default Selector;