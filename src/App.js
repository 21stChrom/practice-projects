
import React from "react";
    import "./style.css";
    import {FaHome} from '@react-icons/all-files/fa/FaHome';
    
    export default function App() {
      return (
        
        <div className="cover">
          <h1 style={{color: "transparent"}}>
          "Don't let anyone, ever make you feel like you don't deserve what you want."</h1>
               <audio controls>     
          <source src="https://cdn.jsdelivr.net/gh/21stChrom/practice-projects@main/src/Juice%20WRLD%20-%20Traumatized%20(%20Lyrics%20)%20[%20Unreleased%20]%20[%20Prod.%20by%20RockyRoadz%20]%20__%20Vibe%20Alone%20[720p].mp3" type="audio/mpeg" />
          </audio>
                      
            <div>
              <div id={"space"} />
          <div className=""><FaHome className="home"/></div>
  
            </div>
    
        </div>
        
      );
  }