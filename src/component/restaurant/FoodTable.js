import React from 'react'
// import Foods from "./menuApi"


const FoodTable = ({Foods}) => {
    // console.log(Foods)
    const cards=Foods.map((curEle)=>{
        const {id,category,name,desc,image}=curEle
        return(
            
                
                    <div className="card_container" key={id}>
                        <div className="card">
                            <span className="id">{id}</span>
                            <p>{category}</p>
                            <h2>{name}</h2>
                            <p>{desc}</p>
                            
                            <hr/> <span>READ</span>
                            <div className='details'>
                                <img src={image} alt="" />                    
                                <button>Order Now</button>                    
                            </div>   

                        </div>
                    </div>
                    
                    
        )
    })


  return (
    <div className="container" >
                                    
        
            {cards}

        
    </div>
                            
                            
               
        
  )
}

export default FoodTable