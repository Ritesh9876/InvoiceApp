import React from 'react'
import './numberInput.css'
import { TextField } from '@mui/material';

function NumberInput(props) {
    function isNum(v) {
        return /^\d+$/.test(v);
    }
    return (
        <div className="numberInput-container">
            <TextField
                value={props.value}
                onChange={(event) => {
                    if(event.target.value ==="" || isNum(event.target.value))
                    {
                        console.log("its working ",event.target.value)
                        props.handleInputChange(props.index, props.name, event.target.value)

                    }
                }}
                fullWidth
            />
        </div>
    )
}

export default NumberInput