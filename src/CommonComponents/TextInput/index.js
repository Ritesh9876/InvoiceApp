import React from 'react'
import './textInput.css'
import { TextField } from '@mui/material';
function TextInput(props) {
  
  return (
    <div className="textInput-container">
      <TextField
        value={props.value ? props.value : ""}

        onChange={(event) => {
          props.handleInputChange(props.index, props.name, event.target.value)
        }}
        fullWidth
      />
    </div>
  )
}

export default TextInput