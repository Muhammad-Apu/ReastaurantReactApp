import FoodTable from "./FoodTable"
import Navbar from "./Navbar"
import "./style.css"
import Foods from "./menuApi"
import { useState } from 'react'




const RestaurantUI = () => {
  const  [showItems,setShowItems]=useState(Foods)
  
  const handleClick=(menu)=>{
    
    if(menu==="All"){
      setShowItems(Foods)
    }else{
      const items=Foods.filter((curEle)=>{
        return curEle.category===menu
      })
      console.log(items)
      setShowItems(items)
    }
    // console.log(menu);

  }


  // console.log(Foods)
  return (
    
    <>
      
      <Navbar Foods={Foods} handleClick={handleClick}/>
      <FoodTable Foods={showItems}/>
    </>
  )
}

export default RestaurantUI
