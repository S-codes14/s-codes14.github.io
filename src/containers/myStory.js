import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./greeting/Greeting.css";

import {myStory} from "../portfolio";
import StyleContext from "../contexts/StyleContext";

export default function Story() {
  const {isDark} = useContext(StyleContext);
  if (!myStory) {
    return null;
  }
 return (
     <div>
         { myStory.map((tag, i) => {
  
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {tag.title}{" "}
                <span className="wave-emoji">{emoji("")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {tag.content}
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
    
})}
     </div>
 )
}
