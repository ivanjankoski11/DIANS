import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import atmBro from "./ATM machine-bro (1).png"
import "./Home.css"

const Home = () => {

  const navigate = useNavigate();

  const handleClickBtn = () =>{
      navigate('/atm');
  }


  return (
    <div className='home'>
        <Navbar/>
        <div className='home-header'>
            <div className='home-head-left'>
              <div className='home-title'>
                <h1>Со еден клик до вашиот најблизок банкомат</h1>
                <button className='home-btn' onClick={handleClickBtn}>Дознај повеќе</button>
              </div>
            </div>
            <div className='home-head-right'>
                <img className='atmBro' src={atmBro} ></img>
            </div>
        </div>
    </div>
  )
}

export default Home