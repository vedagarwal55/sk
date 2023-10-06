import React from 'react'
import {useNavigate} from "react-router-dom"

const SpecialCard = ({image,special}) => {
  const navigate=useNavigate()
    const clickHandler=()=>{
        console.log("button clikced")
    }
  return (
    <div className='box' onClick={()=>navigate("/doctors")}>
        <img src={image}/>
        <h4>{special}</h4>
    </div>
  )
}

export default SpecialCard