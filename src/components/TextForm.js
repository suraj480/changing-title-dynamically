import React from 'react'
import { useState } from 'react'

const TextForm = (props) => {
    const [text,setText]=useState("Enter Text here")
    const handleClickUppercase=()=>{
        let newText =text.toUpperCase();
        setText(newText)
        console.log("Upper case was clicked")
    }
    const handleClickLowerCase=()=>{
        let newText2=text.toLowerCase();
        setText(newText2);
        console.log("Lower case was clicked")
    }
    const handleOnChange=(e)=>{
        setText(e.target.value)
        console.log("on chnage")
    }
    const handleCleartext =()=>{
setText("")
    }
    console.log(text)
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows='8'> </textarea>
        </div>
       <button onClick={handleClickUppercase} className='btn btn-primary'>Convert To uppercase</button>
       <button onClick={handleClickLowerCase} className='btn btn-primary mx-2'>Convert To Lowercase</button>
       <button onClick={handleCleartext} className='btn btn-primary'>Clear Text</button>
      <div className='container my-3'>
<h1>Your Text Summary</h1>
<p> {text.split(" ").length} words and {text.length} characters</p>
<p>{0.008* text.split(" ").length} Minutes read</p>
<h1>Preview</h1>
<p>{text}</p>
      </div>
    </div>
  )
}

export default TextForm
