import React from "react"


function Bgchange(){
  const redChange =()=>{
    var body = document.body
    body.style.backgroundColor = "red"
  }
  const orangeChange =()=>{
    var body = document.body
    body.style.backgroundColor = "orange"
  }
  const yellowChange =()=>{
    var body = document.body
    body.style.backgroundColor = "yellow"
  }
  const greenChange =()=>{
    var body = document.body
    body.style.backgroundColor = "green"
  }
  const blueChange =()=>{
    var body = document.body
    body.style.backgroundColor = "blue"
  }
  const indigoChange =()=>{
    var body = document.body
    body.style.backgroundColor = "indigo"
  }
  const violetChange =()=>{
    var body = document.body
    body.style.backgroundColor = "violet"
  }
 
  
  
  return(
    
    <>
    
    
      <div className="container">
        
        <div  className="main-box">
          <button onClick={redChange} style={{backgroundColor:'red'}} className="color-circle Red  "></button>
          <button onClick={orangeChange} style={{backgroundColor:'orange'}} className="color-circle "></button>
          <button onClick={yellowChange} style={{backgroundColor:'yellow'}} className="color-circle "></button>
          <button onClick={greenChange} style={{backgroundColor:'green'}} className="color-circle  "></button>
          <button onClick={blueChange} style={{backgroundColor:'blue'}} className="color-circle  "></button>
          <button onClick={indigoChange} style={{backgroundColor:'indigo'}} className="color-circle "></button>
          <button onClick={violetChange} style={{backgroundColor:'violet'}} className="color-circle "></button>
        </div>
      </div>
    </>
   
  )
}
export default Bgchange