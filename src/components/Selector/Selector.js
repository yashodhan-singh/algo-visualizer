import * as React from 'react';
import { Grid, Select, Button, ListSubheader, FormControl, MenuItem, InputLabel, Box, Typography, Slider, Input } from '@mui/material';
import './Selector.scss';

export default function Selector({ setVisualizerProps }){
    
    const [algo, setAlgo] = React.useState('');
    const [arraySize, setArraySize] = React.useState('');
    
    const handleSliderChange = (event, newValue) => {
        setArraySize(newValue);
        setVisualizerProps([algo, newValue])
    }

    const handleChange = (event) => {
        setAlgo(event.target.value);
        setVisualizerProps([event.target.value, arraySize])
    }

    const handleInputChange = (event) => {
        setArraySize(event.target.value === "" ? "" : Number(event.target.value));
        setVisualizerProps([event.target.value, arraySize])
    }

    const handleBlur = () => {
        if (arraySize < 0) {
            setArraySize(0);
        } else if (arraySize > 100) {
            setArraySize(100);
        }
    };
    
    return(
        <div className = "Selector__Box">
            <div>
                <Typography id="input-slider">
                    What would you like to visualize?
                </Typography>
            </div>
            <Box marginLeft="3.7rem" marginRight="3.7rem" paddingBottom="1rem" paddingTop="1rem">
                <Grid container spacing = {2} alignItems = "center">
                    <Grid item xs>
                        <Slider
                            value = {typeof arraySize === "number" ? arraySize : 0}
                            onChange = {handleSliderChange}
                            aria-labelledby="input-slider"
                            max = "100"
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            className='arraySizeInput'
                            value = {arraySize}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 1,
                                min:0,
                                max: 100,
                                type:"number",
                                "aria-labelledby" : "input-slider"
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography id="input-slider">
                            elements
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <div className = "Selector__DropDownBox">
                <Box sx={{ minWidth: 250 }}>
                    <FormControl fullWidth size="small">
                        <InputLabel>Choose Algorithm</InputLabel>
                        <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={algo}
                            label="Choose Algorithm"
                            onChange={handleChange}
                            align="left"
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
                <Button onClick={() => {
                    setVisualizerProps([algo, arraySize]);
                }}
                    className="Selector__SortButton" left="1rem" variant="outlined" sx = {{ height: 40}}> Go </Button>
            </div>
        </div>
    );
}

//we have the algo, now create a display for the java code for the algo below both of the elements
//reformat our display to be 1 element per line i.e. mobile responsive

