import React, { useState } from 'react';
import './animate.css';
import './index.css';

const animations = {
  "Attention Seekers": ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'],
  "Back Entrances": ['backInDown', 'backInLeft', 'backInRight', 'backInUp'],
  "Back Exits": ['backOutDown', 'backOutLeft', 'backOutRight', 'backOutUp'],
  "Bouncing Entrances": ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp'],
  "Bouncing Exits": ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp'],
  "Fading Entrances": ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomLeft', 'fadeInBottomRight'],
  "Fading Exits": ['fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'fadeOutTopLeft', 'fadeOutTopRight', 'fadeOutBottomRight', 'fadeOutBottomLeft'],
  "Flippers": ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'],
  "Lightspeed": ['lightSpeedInRight', 'lightSpeedInLeft', 'lightSpeedOutRight', 'lightSpeedOutLeft'],
  "Rotating Entrances": ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight'],
  "Rotating Exits": ['rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight'],
  "Specials": ['hinge', 'jackInTheBox', 'rollIn', 'rollOut'],
  "Zooming Entrances": ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp'],
  "Zooming Exits": ['zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp'],
  "Sliding Entrances": ['slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
  "Sliding Exits": ['slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp']
};

function App() {
  const [animation, setAnimation] = useState('');

  const handleAnimate = (anim) => {
    // If the same animation is clicked, reset it to re-trigger
    if (animation === anim) {
      setAnimation('');
      setTimeout(() => {
        setAnimation(anim);
      }, 0);
    } else {
      setAnimation(anim);
    }
  };

  const handleAnimationEnd = () => {
    // Do not clear the animation class here to prevent the text from resetting
    // The animation will be cleared when a new one is triggered
  };

  return (
    <div className="app-container">
      <div className="animation-buttons">
        {Object.entries(animations).map(([category, anims]) => (
          <div key={category} className="animation-category">
            <h3>{category}</h3>
            <div className="button-group">
              {anims.map((anim) => (
                <button key={anim} onClick={() => handleAnimate(anim)}>
                  {anim}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-display">
        <div
          // Use a key to force re-rendering and re-triggering the animation
          key={animation}
          className={`animate__animated animate__${animation}`}
          onAnimationEnd={handleAnimationEnd}
        >
          Animate Me
        </div>
      </div>
    </div>
  );
}

export default App;
