import React, { useEffect } from 'react'
import "./ATM.css"
import Navbar from "../Navbar/Navbar"
import BankLink from "../BankLink/BankLink"
import ccbank from "./BankImgs/ccbank.png"
import ohridska from "./BankImgs/download.png"
import halk from "./BankImgs/halkBank.png"
import kom from "./BankImgs/komBank.png"
import nlb from "./BankImgs/nlb.jpg"
import procredit from "./BankImgs/procredit.png"
import silkRoad from "./BankImgs/silkRoad.png"
import stopanska from "./BankImgs/stopanska.jpg"
import ttk from "./BankImgs/ttk.png"
import uni from "./BankImgs/uni.png"
import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import BankCard from '../BankCard/BankCard'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Map from '../Map/Map'


const ATM = ({isActive,setIsActive,activeBank,setActiveBank}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  const banks =[
    {
      name:"Комерцијална Банка АД Скопје",
      address:"Видан Јанакиевски 3",
      bank:"kom"
    },
    {
      name:"Стопанска Банка АД Скопје",
      address:"Јосиф Христовски б.б.",
      bank:"stopanska"
    },
    {
      name:"Уни Банка",
      address:"Партизанска 94 лок.1"
    },
    {
      name:"Охридска Банка",
      address:"Ул. Непозната бр.5"
    },
    {
      name:"Халк Банка",
      address:"Ул. Непозната бр.112"
    },
    {
      name:"Централна кооперативна банка",
      address:"Ул. Непозната бр.100"
    },
    {
      name:"ТТК Банка",
      address:"Ул. Непозната бр.10"
    },
    {
      name:"НЛБ Банка",
      address:"Ул. Непозната бр.2"
    },
    {
      name:"ПроКредит Банка",
      address:"Ул. Непозната бр.13"
    },
    {
      name:"СилкРоуд Банка",
      address:"Ул. Непозната бр.16"
    }
  ]
  const [filtered,setFiltered] = useState(banks);
  const handleBank = (e) =>{
    if(e.target.className==="bankImg")
    {
      setActiveBank(e.target.parentNode.getAttribute("bank"));
    }
    
  }
  let banka = "";
  const getBankImg = (name) =>{
    if(name.includes("Комерцијална"))
    {
      banka=kom;
    }
    else if(name.includes("Стопанска"))
    {
      banka = stopanska;
    }
    else if(name.includes("НЛБ"))
    {
      banka = nlb;
    }
    else if(name.includes("ТТК"))
    {
      banka = ttk;
    }
    else if(name.includes("Уни"))
    {
      banka = uni;
    }
    else if(name.includes("Централна"))
    {
      banka = ccbank;
    }
    else if(name.includes("Про"))
    {
      banka = procredit;
    }
    else if(name.includes("Халк"))
    {
      banka = halk;
    }
    else if(name.includes("Охрид"))
    {
      banka = ohridska;
    }
    else
    {
      banka = silkRoad;
    }
  }
  const [moreInfo,setMoreInfo] = useState({})
  
  const handleMoreInfo = (e) =>{
      let name = e.target.parentNode.children[1].innerHTML;
      let addr = e.target.parentNode.children[2].innerHTML;
      let img = e.target.parentNode.children[0].getAttribute("src");
      
      let search = addr;
      setMoreInfo({
        name:name,
        addr:addr,
        img:img,
        search:search,
      })
      setOpen(true);
  }

  const showDirections = (search) =>{
        window.location="https://www.google.com/maps/search/"+search;
  }

  const filterSearch = (e) =>{
      let search = e.target.value;
      setFiltered(banks.filter(bank=>bank.name.toLowerCase().includes(search.toLowerCase())))
      if(e.target.value===null)
      {
        setFiltered(banks);
      }
  }
  

  return (
    <div className='atm'>
        <Navbar />
        <div className='atm-header'>
            <div className='atm-aside'>
              <BankLink source={uni} handleClick = {handleBank} bank="uni" />
              <BankLink source={stopanska} handleClick = {handleBank} bank="stopanska" />
              <BankLink source={procredit} handleClick = {handleBank} bank="procredit" />
              <BankLink source={halk} handleClick = {handleBank} bank="halk" />
              <BankLink source={ohridska} handleClick = {handleBank} bank="ohridska" />
              <BankLink source={ccbank} handleClick = {handleBank} bank="ccbank" />
              <BankLink source={silkRoad} handleClick = {handleBank} bank="silkRoad" />
              <BankLink source={kom} handleClick = {handleBank} bank="kom" />
              <BankLink source={nlb} handleClick = {handleBank} bank="nlb" />
            </div>
            <div className='atm-main'>
              <div className='atm-flex'>
              <div className='atm-main-top'>
                    <div className='atm-main-title'>
                      <h1>Банкомати</h1>
                      <h4>Оваа апликација е оптимизирана за банкомати во општина Битола</h4>
                    </div>
                    <div className='atm-main-search'>
                      <div className='searchBar'>
                        <input type="text" placeholder='Комерцијална....' onChange={filterSearch} />
                        <p>?</p>
                      </div>
                    </div>
                </div>
                <div className='atm-main-bot' >
                <Dialog
                  maxWidth={"lg"}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description">
                    <div className='dialog-inline'>
                        <Map search={moreInfo.search} />
                        <div className='dialog-info'>
                          <img style={{height:"150px",width:"150px"}} src={moreInfo.img}/>
                          <h1>{moreInfo.name}</h1>
                          <h3>{moreInfo.addr}</h3>
                          <button onClick={()=>showDirections(moreInfo.search)}>Види насоки</button>
                        </div>
                    </div>
                </Dialog>
                    {
                      filtered.map((bank)=>{
                          getBankImg(bank.name);
                          return(<BankCard handleMoreInfo={handleMoreInfo} bankImg={banka}  bank={bank.name} addr={bank.address}  />)
                      })
                    }
                  {/* <BankCard bankImg={procredit} bank="ПроКредит банка" addr={"Ул. Лондонска б.б"} />
                  <BankCard bankImg={stopanska} bank="Стопанска банка АД Скопје" addr={"Ул. Лондонска б.б"} />
                  <BankCard bankImg={ttk} bank="ТТК Банка" addr={"Ул. Лондонска б.б"} />
                  <BankCard bankImg={kom} bank="Комерцијална банка АД Скопје" addr={"Ул. Лондонска б.б"} />
                  <BankCard bankImg={halk} bank="Халк банка " addr={"Ул. Лондонска б.б"} />
                  <BankCard bankImg={silkRoad} bank="СилкРоуд банка" addr={"Ул. Лондонска б.б"} />
                  <BankCard bankImg={ccbank} bank="Централна кооперативна банка" addr={"Ул. Лондонска б.б"} />
                  <BankCard bankImg={ohridska} bank="Охридска банка" addr={"Ул. Лондонска б.б"} />
                  <BankCard bankImg={procredit} bank="ПроКредит банка" addr={"Ул. Лондонска б.б"} />
                  <BankCard bankImg={stopanska} bank="Стопанска банка АД Скопје" addr={"Ул. Лондонска б.б"} />
                  <BankCard bankImg={ttk} bank="ТТК Банка" addr={"Ул. Лондонска б.б"} />
                  <BankCard bankImg={kom} bank="Комерцијална банка АД Скопје" addr={"Ул. Лондонска б.б"} /> */}

                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ATM