import "./Technology.css";
import data from "../../assets/data.json"
import { useState } from "react";

export const TechnologyC = () => {
    const [current,setCurrent] = useState(0);
    const technology  = data.technology[current];
    return(
       <div className="container-technology">
        <div className="container-technology-content">
            <div className="left-technology-part">
            <div className="left-part-dest-header"><div className="number-left-header">03</div>
                SPACE LAUNCH 101</div>
                <div className="left-technology-container">
                <div className="technology-buttons">
                    {data.technology.map((_, index) => (
                        <div key={index} className={`technology-button ${current === index ? 'active' : ''}`} 
                        onClick={() => setCurrent(index)}>{index}</div>
                    ))}
                </div>

                <div className="left-technology-content">
                <div className="left-technology-header"><span>THE TERMINOLOGY</span><div className="technology-name">{technology.name}</div></div>
                <div className="technology-text">{technology.description}</div>
                </div>
                </div>
            </div>
            <div className="right-technology-part">
                <img className="technology-image" src={technology.images.portrait} alt="technology.image" />
            </div>
        </div>
       </div>
    )
}