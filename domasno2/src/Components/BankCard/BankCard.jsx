import React from 'react'
import "./BankCard.css"

const BankCard = ({bank,bankImg,addr,handleMoreInfo}) => {
  return (
    <div className='bankCard'>
        <img className='bankCardImg' src={bankImg} />
        <h1>{bank}</h1>
        <h4>{addr}</h4>
        <button onClick={handleMoreInfo} >Дознај повеќе</button>
    </div>
  )
}

export default BankCard