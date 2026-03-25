import "./Crew.css";
import crew from "../../assets/data.json"
import { useState } from "react";

interface Person{
    name:string,
    images:{
        png:string,
        webp:string
    },
    role:string,
    bio:string
}
export const CrewC = () => {
    const [current,setCurrent] = useState(0);
    const person:Person = crew.crew[current];
    return(
       <div className="container-crew">
        <div className="container-crew-content">
            <div className="left-crew-part">
                <div className="left-part-dest-header"><div className="number-left-header">02</div>
                MEET YOUR CREW</div>
                <div className="left-crew-content">
                    <div className="left-crew-header"><span>{person.role}</span><div className="crew-name">{person.name}</div></div>
                <div className="crew-text">{person.bio}</div>
                <div className="crew-buttons">
                    {crew.crew.map((_, index) => (
                        <div key={index} className={`crew-button ${current === index ? 'active' : ''}`} 
                        onClick={() => setCurrent(index)}></div>
                    ))}
                </div>
                </div>
            </div>
            <div className="right-crew-part">
                <img className="crew-image" src={person.images.png} alt="person.image" />
            </div>
        </div>
       </div>
    )
}