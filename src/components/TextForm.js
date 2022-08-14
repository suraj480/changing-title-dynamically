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

    const handleCopy=()=>{
      var text= document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces=()=>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "))
    }
   // console.log(text)
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className='form-control' style={{backgroundColor: props.mode==='dark'?'grey':'white',
      
      color: props.mode==='dark'?'white':'#042743'
      }} value={text} onChange={handleOnChange} id='myBox' rows='8'> </textarea>
        </div>
       <button onClick={handleClickUppercase} className='btn btn-primary mx-2'>Convert To uppercase</button>
       <button onClick={handleClickLowerCase} className='btn btn-primary mx-2'>Convert To Lowercase</button>
       <button onClick={handleCleartext} className='btn btn-primary'>Clear Text</button>
       <button onClick={handleCopy} className='btn btn-primary mx-2'>Copy Text</button>
       <button onClick={handleExtraSpaces} className='btn btn-primary mx-2'>Remove Extra Spaces</button>
       {console.log("props.mode",props.mode)}
      <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
<h1 style={{color: props.mode==='dark'?'white':'#042743'}}>Your Text Summary</h1>
<p> {text.split(" ").length} words and {text.length} characters</p>
<p>{0.008* text.split(" ").length} Minutes read</p>
<h1>Preview</h1>
<p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
      </div>
    </div>
    </>
  )
}

export default TextForm
