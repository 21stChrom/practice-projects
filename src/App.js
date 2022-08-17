
import { connect } from 'react-redux';
import JPlayer from 'react-jplayer';
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import React from "react";
    import "./style.css";
    import {FaHome} from '@react-icons/all-files/fa/FaHome';
    
    export default function App() {
      return (
        
        <div className="cover">
          <div className="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>

          <div className="box">
          
         
          </div>
              
            <div>.space
              <div id={"space"} >
                <input type="" />
              </div>
             space </div>
          
        
              <div className="audio">
               <audio className="audio" controls> .   
               <source src="https://cdn.jsdelivr.net/gh/21stChrom/practice-projects@main/src/Juice%20WRLD%20-%20Traumatized%20(%20Lyrics%20)%20[%20Unreleased%20]%20[%20Prod.%20by%20RockyRoadz%20]%20__%20Vibe%20Alone%20[720p].mp3" type="audio/mpeg" />
          </audio>
             </div>   
             <button >
        <span className="home"><FaHome /></span>
              </button> 
            
        </div>
        
      );
  }