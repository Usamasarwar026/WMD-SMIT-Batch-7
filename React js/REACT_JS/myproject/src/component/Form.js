import React, { useState } from 'react'
import Button from './button'

function Input(props) {
  
  const {heading} = props
  const [text, setText] = useState("")

  const handlechange = (event)=>{
    console.log("handle onchange")
    setText(event.target.value)
  }
  const handleuppercase = ()=>{
    // console.log("uppercase button clicked")
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handlelowercase = ()=>{
    // console.log("lowercase button clicked")
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const countword = ()=>{
    if(!text){
      return 0;
    }
    return text.split(" ").length;
  }
  const countchar = ()=>{
    return text.length;
  }
  
  
  return (
    <div>
      <div className="container my-3">
        <label htmlFor="example" class="form-label text-light text-center w-100 fs-2">{heading}</label>
        <textarea className="form-control" id="example" value={text} onChange={handlechange} rows="3" placeholder='Enter your feedback'></textarea>
        <Button name='Convert to upperCase' onClick={handleuppercase} />
        <Button name='Convert to lowerCase' onClick={handlelowercase} />
        <div className='my-3 text-light'>
          <h2>your Text Summary</h2>
          <p>Total words: {countword()} </p>
          <p>Total Characters: {countchar()} </p>
        </div>
      </div>
    </div>
  )
}

export default Input