import React from 'react'
import "./BankLink.css"

const BankLink = ({source,handleClick,bank}) => {
  return (
    <div className='bankLink' onClick={handleClick} bank={bank} active="false" >
        <img className='bankImg' src={source} ></img>
    </div>
  )
}

export default BankLink