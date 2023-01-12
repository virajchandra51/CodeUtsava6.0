import React from 'react'

import './EventCard.css'

const EventCard = ({img,title,date}) => {
  return (
    <div className="codeutsava__section3-card">
        <img className='codeutsava__section3-image' src={img}></img>
        <div className="codeutsava__section3-cardtitle">
            {title}
        </div>
        <div className="codeutsava__section3-line">
        </div>
        <div className="codeutsava__section3-carddetails">
            {date}
        </div>
    </div>
  )
}

export default EventCard