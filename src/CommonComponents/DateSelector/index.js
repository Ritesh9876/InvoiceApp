import React, {useState } from 'react'
import './dateSelector.css'
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';

function DateSelector(props) {
    const [value,setValue] =useState(dayjs(new Date()))

  return (
    <div className="dateSelector-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
        <DatePicker 
        value={value}
        onChange={(new_date) => {
            setValue(new_date)
            console.log("this is new date ",new_date)
            props.handleInputChange(props.index,props.name, value)

        }}
         views={['day','month', 'year']} />
        </DemoContainer>
        </LocalizationProvider>
    </div>
  )
}

export default DateSelector