import React from "react";

import "./Section4.css";

import speakers from "../../assets/data/speakersData.js";

import SpeakerCard from "../../components/speakerCard/SpeakerCard";

const Section4 = () => {
  return (
    <div className="codeutsava__section4" id="speakers">
      <div className="codeutsava__section4-body">
        <div className="codeutsava__section4-title">Speakers</div>
        <div className="codeutsava__section4-speakers">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} img={speaker.img} name={speaker.name} position={speaker.position} description={speaker.description}
            facebook={speaker.facebook} twitter={speaker.twitter} linkedin={speaker.linkedin} github={speaker.github} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;