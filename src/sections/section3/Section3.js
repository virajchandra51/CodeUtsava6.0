import React from 'react'

import './Section3.css'

import events from '../../assets/data/eventsData.js'
import leftArrow from '../../assets/images/leftArrow.png'
import rightArrow from '../../assets/images/rightArrow.png'

import EventCard from '../../components/eventCard/EventCard'

const Section3 = () => {
    const scrollRef = React.useRef(null);
    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
        current.scrollLeft -= 300;
        } else {
        current.scrollLeft += 300;
        }
    };
    return(
        <div className="codeutsava__section3" id="events">
            <div className="codeutsava__section3-body">
                <div className="codeutsava__section3-title">
                    Events
                </div>
                <div className="codeutsava__section3-events">
                    <div className="codeutsava__section3-events-container" ref={scrollRef}>
                    {events.map((event,index) => (
                        <EventCard key={index} img={event.img} title={event.title} date={event.date}/>
                    ))}    
                    </div>
                </div>
                <div className="codeutsava__section3-slider">
                    <div className="codeutsava__section3-slider-left" onClick={() => scroll('left')}>
                        <img src={leftArrow} alt="leftArrow"></img>
                    </div>
                    <div className="codeutsava__section3-slider-right" onClick={() => scroll('right')}>
                        <img src={rightArrow} alt="rightArrow"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;