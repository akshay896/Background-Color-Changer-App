import React, { useState, useEffect } from "react";
import { debounce } from "lodash"; // 

const Eyeball = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = debounce((event) => { 
      const eyeElements = document.querySelectorAll('.eye');
      eyeElements.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const newRotation = (radian * (180 / Math.PI) * -1) + 270;

        
        const easeFactor = 0.05; 
        setRotation(prevRotation => ({
          x: prevRotation.x + (newRotation - prevRotation.x) * easeFactor,
          y: prevRotation.y + (newRotation - prevRotation.y) * easeFactor
        }));
      });
    }); 

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="box">
      <div className="eye" style={{ transform: `rotate(${rotation.x}deg)` }}></div>
      <div className="eye" style={{ transform: `rotate(${rotation.y}deg)` }}></div>
    </div>
  );
};

export default Eyeball;
