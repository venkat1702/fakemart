import React from 'react'
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { details } from '../actions';

const ProductCard = (props) => {
  const dispatch =useDispatch()

  function upd(){
    dispatch(details({title:props.title,count:1,price:props.price}))
  }
  return (
    <div className='card'>
        <div className='image'>
            <img src={props.image}></img>
        </div>
        <div className='productContent'>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"20px"}}>
              <div style={{width:"60%"}}><div className='title'>{props.title}</div></div>
              <div><Rating name="read-only" value={props.rating.rate} readOnly /></div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"20px",alignContent:"baseline"}}>
            <div className='price'>${props.price}</div>
            <div style={{width:"40%"}}><button onClick={()=>upd({item:props.title,count:1})} className='addtoCart'>Add to cart</button></div>
        
            </div>
        </div>

        
    </div>
  )
}

export default ProductCard