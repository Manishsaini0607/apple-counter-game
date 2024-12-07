import React, { useState } from 'react'
import Button from './Button'
import leftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import { AppleBaskit } from './AppleBaskit'
import './AppleCounter.css'
/* rightAppleCount=0; */
/* leftAppleCount=totalAppleCount-rightAppleCount */


const AppleCounter = () => {
   totalAppleCount=10;
  const [rightAppleCount,setRightAppleCount ]=useState(0)
  const [leftAppleCount,setLeftAppleCount]=useState(totalAppleCount-rightAppleCount)

  const leftOnclick =() => { 
 if ( leftAppleCount < 10  ){
   setLeftAppleCount((previusset)=>previusset+1)

  setRightAppleCount(rightAppleCount-1)
 }
 
  
}
const rightOnclick=()=>{
 if(rightAppleCount < 10)
 {
 setRightAppleCount(rightAppleCount+1)
  setLeftAppleCount(leftAppleCount-1)
 }
 
}
  
  return (
    
   <section>
    <AppleBaskit count={leftAppleCount}  baskitName='Baskit-1' />
          <Button url={leftArrow} alt='left-arrow'  onclick={leftOnclick} > left arrow</Button>
          <Button url={RightArrow} alt='right-arrow' title={'right-arrow'} onclick={rightOnclick} >right arrow</Button>
          <AppleBaskit count={rightAppleCount}  baskitName='Baskit-2' />
   </section>
  )
}

export default AppleCounter