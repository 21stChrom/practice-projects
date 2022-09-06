import React from 'react';
import './style.css';
import { FaHome } from '@react-icons/all-files/fa/FaHome';

export default function App() {
  return (
    <div className="cover">
      <div className="wrapper">
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="box"></div>

        <div>
          <div id={'space'}>
            <input type="" />
          </div>
        </div>

        <div className="audio">
          <audio className="audio" loop controls>
            <source
              src="https://cdn.jsdelivr.net/gh/21stChrom/practice-projects@main/src/Juice%20WRLD%20-%20I%20Hate%20Wasting%20Time%20%20%20(Unreleased)%20[prod.%20dfk]%20[720p].mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
        <div>
          <audio className="audio" loop controls>
            <source
              src="https://cdn.jsdelivr.net/gh/21stChrom/practice-projects@main/src/Juice%20WRLD%20-%20Traumatized%20(%20Lyrics%20)%20[%20Unreleased%20]%20[%20Prod.%20by%20RockyRoadz%20]%20__%20Vibe%20Alone%20[720p].mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
        <button>
          <span className="home">
            <FaHome />
          </span>
        </button>
      </div>
    </div>
  );
}
