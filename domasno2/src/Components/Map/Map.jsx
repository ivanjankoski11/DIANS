import React from 'react'
import "./Map.css"

const Map = ({search}) => {

  return (
    <div className='map'>
        <iframe width="100%" height={"600px"} src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;q=KomercijalnaBankaBitola&output=embed'>
        </iframe></div>
  )
}

export default Map