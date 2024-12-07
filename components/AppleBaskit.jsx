import React from 'react'
import './Counnter.module.css'

export const AppleBaskit = ({count,baskitName}) => {
  return (
    <div className='Apple-baskit'>
        <h1 className='bgred'>
            <span>{count}</span>
          Apple        
        </h1>
        <p>{baskitName} {count===10 && "full"}{count ===0 && "emty"} { (count>=5 && count<10) && "half full"}</p>
    </div>
  )
}
