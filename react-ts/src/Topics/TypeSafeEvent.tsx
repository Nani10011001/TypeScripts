// type safe event is used in the events check of the like input fileds 
//Type safe Events:
/* 
React.ChangeEvent<HTMLTextAreaElement>
React.ChangeEvent<HTMLSelectElement>
React.FormEvent<HTMLFormElement>

const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
};
const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
  const checked = e.target.checked; // boolean
}; */
import React, { useState } from "react"

const TypeSafeEvent = () => {
    const [text,setText]=useState<string>("")
    const handleInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
  setText(e.target.value)
    }
  return (
    <div>
        <p>TypeSafeEvent:</p>
        <p>TextInfo: {text}</p>
      <input 
      value={text}
      onChange={handleInput}
       type="text" 
       placeholder="enter the text" 
       className="px-6 py-2 rounded-md placeholder:text-gray-400" />
    </div>
  )
}

export default TypeSafeEvent
