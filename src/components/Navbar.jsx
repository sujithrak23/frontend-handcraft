import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className='navbar'>

        <div style={{display:"flex",flexDirection:"row",paddingLeft:"50px"}}>
            <img src='https://i.pinimg.com/564x/68/ca/3f/68ca3f52ce3733ea6954b41c1bd9013c.jpg' style={{height:"60px", width:"60px", borderRadius:"50%"}}></img>
            <p className='name'>HandmadeHub</p>
        </div>

        <div style={{display:"flex",flexDirection:"row",paddingLeft:"50px"}}>
            <a className='nav-cart' href='#' style={{padding:"10px"}}>Cart</a>
            <a className='nav-log' href='#' style={{padding:"10px"}}>Login</a>
        </div>
          
     </div>
     <hr/>
     </> 
     
  )
}
