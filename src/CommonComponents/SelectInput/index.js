import React from 'react'
import './selectInput.css'
import { FormControl,Select,OutlinedInput,MenuItem } from '@mui/material'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
   //   width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];



function SelectInputType(props) {

  return (
    <div className="selectInputType-container">
        <FormControl sx={{ m: 0, width: "100%" }}>
        <Select
          value={props.value}
          onChange={(event) =>{
            props.handleInputChange(props.index,props.name,event.target.value)
          }}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          fullWidth
        >
          {props.options.map((name) => (
            <MenuItem
              key={name}
              value={name}

            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectInputType