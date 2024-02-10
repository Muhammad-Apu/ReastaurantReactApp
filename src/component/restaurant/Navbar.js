// import React from 'react'
// import Menu from './Menu'
// import Foods from "./menuApi"
// import React, { useEffect,useRef } from 'react';

const Navbar = ({Foods,handleClick}) => {
    // const btnRef=useRef()
    // useEffect(() => {
    //   btnRef.current.focus()
    // }, [])
    
    

    let Uniquecatergory=[]
//    console.log(Foods)
    Foods.forEach((curEle)=>{
       if(!Uniquecatergory.includes(curEle.category)){
        Uniquecatergory.push(curEle.category)
       }
        
    
    })
    Uniquecatergory.push("All")
    // console.log(Uniquecatergory)




    const category=Uniquecatergory.map((curEle,i)=>{

        
            return(
                curEle==="All"?
                <div key={i} className="btndiv"><button onClick={()=>handleClick(curEle)} autoFocus className="btn"><b>{curEle}</b></button></div>:                
                <div key={i} className="btndiv"><button onClick={()=>handleClick(curEle)} className="btn"><b>{curEle}</b></button></div>                
            )
        
    })



  return (
    <>  
        <div className="navbar">
            <div className="btn-group">                
                {category}
            </div>        
        </div>

    </>
  )
}

export default Navbar