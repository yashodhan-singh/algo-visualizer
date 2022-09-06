import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Slider from '../Slider/Slider';
import ListSubheader from '@mui/material/ListSubheader';
import './Selector.scss';


function Selector(){

    const [algo, setAlgo] = React.useState('');

    const handleChange = (event) => {
        setAlgo(event.target.value);
    };

    return(
        <div className = "Selector__Box">
            <div>
                <Slider/>
            </div>
            <div className = "Selector__DropDownBox">
                <Box sx={{ minWidth: 250 }}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
                        <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={algo}
                            label="Algorithm"
                            onChange={handleChange}
                            >
                            <ListSubheader>Sort Algorithms</ListSubheader>
                            <MenuItem value={1}>Binary Sort</MenuItem>
                            <MenuItem value={2}>Merge Sort</MenuItem>
                            <MenuItem value={3}>Heap Sort</MenuItem>
                            <MenuItem value={4}>Bubble Sort</MenuItem>
                            <ListSubheader>Search Algorithms</ListSubheader>
                            <MenuItem value={5}>Binary Search</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div className ="Selector__Spacer"></div>
                <Button className="Selector__SortButton" left="1rem" variant="outlined" sx = {{ height: 40}}> Go </Button>
            </div>
        </div>
    );
}

export default Selector;