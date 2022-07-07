import React from 'react'
import Rating from '@mui/material/Rating';

const ProductCard = () => {
  return (
    <div className='card'>
        <div className='image'>
            <img src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'></img>
        </div>
        <div className='productContent'>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"20px"}}>
              <div style={{width:"60%"}}><div className='title'>Mens Casual Premium Slim Fit T-Shirts</div></div>
              <div><Rating name="read-only" value={4.5} precision={0.5} readOnly /></div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"20px",alignContent:"baseline"}}>
            <div className='price'>$60</div>
            <div style={{width:"40%"}}><button className='addtoCart'>Add to cart</button></div>
        
            </div>
        </div>

        
    </div>
  )
}

export default ProductCard