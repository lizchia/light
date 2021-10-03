import React from 'react'
import '../App.css';
import './Left.css'

function leftLight(props){
    return(
      <div className="leftbox">
        <div className="light-box box1 up"></div>
        <div className="light-box box2 mid"></div>
        <div className="light-box box3 down"></div>
      </div>
    )
}

export default leftLight