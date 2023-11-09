import React from 'react'
import './textAreaInput.css'
function TextAreaInput(props) {
    return (
        <textarea
            value={props.value ? props.value: ""}
            onChange={(event) => {
                props.handleInputChange(props.index, props.name, event.target.value)
            }}
            className="textAreaInput-container"
            rows="6" cols="10">

        </textarea>
    )
}

export default TextAreaInput