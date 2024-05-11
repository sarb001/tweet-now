import React, { useEffect, useState } from 'react'

const SecondSection = () => {

  const [inputText,setinputText] = useState('');

  const countnow = () => {
    console.log('working here  ==');
  }

  useEffect(() => {
    console.log('inputtext- ',inputText);
    console.log('inputtext length- ',inputText.length);

  },[inputText])

  return (
    <>
      <div className='h-52 m-4'>
          <div>
             <div> Tweet Now </div>
             <div>
              <input className='w-full h-12 outline-none '   type = "text" placeholder='Whats happening now ??' 
              value = {inputText} onChange = {(e) => setinputText(e.target.value)} />
             </div>
             <div className='m-2 text-end '>
              <div>
                <span> {inputText.length > 0  ? inputText.length : ""} </span>
              </div>
              <div>
                  <button disabled = {inputText <= 1} className='disabled:bg-blue-200 bg-blue-500 py-2 px-6 rounded-xl' onClick={countnow}> Post </button>
              </div>
             </div>
          </div>
      </div>
    </>
  )
}

export default SecondSection