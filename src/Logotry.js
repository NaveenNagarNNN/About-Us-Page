import React from 'react';
// import logo from './src/Logo.png';
import aboutuslogo from '../src/echooling-logo.png'

function Logotry() {
  return (
    <div style={{justifyContent:'center'}}>
    <img  style={{height:35,width: 150,alignContent:'flex-start'}} src={aboutuslogo}></img>
   </div>
  )
}

export default Logotry