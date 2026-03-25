import "./destination.css";
import data from "../../assets/data.json"
import { useState } from "react";
export  const Destiantion = () => {
    const [current,setCurrent] = useState(0)
    const planet = data.destinations[current];
    return(
        <div className="container-destination">
            <div className="container-destination-content">
            <div className="left-part-dest">
                <div className="left-part-dest-header">
                    <div className="number-left-header">01</div>
                    PICK YOUR DESTINATION
                </div>
                <img className="planet-dest fade-in" src={planet.images.png} alt="planet" />
            </div>
            <div className="right-part-dest">   
            <nav>
                <ul className="destinations-nav">
                {data.destinations.map((destinations,index) => (
                    <div key = {index} className="dest-container">
                        <button onClick={() => setCurrent(index)} className={`dest ${current === index ? 'active' : ''}`}>{destinations.name}</button>
                    </div>
                    ))}
                </ul>
            </nav>
               <div className="header-dest">{planet.name}</div>
               <div className="description-dest">{planet.description}</div>
               <div className="numbers-dest">
                <div className="number-dest">
                    <div className="number-dest-header">AVG. DISTANCE</div>
                        <div className="number-dest-content">{planet.distance}</div>
                </div>
                <div className="number-dest">
                    <div className="number-dest-header">EST. TRAVEL TIME</div>
                    <div className="number-dest-content">{planet.travel}</div>
                </div>
               </div>
            </div>
            </div>
    

         
        </div>
    )
}