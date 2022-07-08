import React from "react";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { details } from "../actions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const ProductCard = (props) => {
  const dispatch = useDispatch();

  function upd() {
    dispatch(details({ title: props.title, count: 1, price: props.price }));
  }
  return (
    <div className="card">
      <div className="image">
        <img src={props.image}></img>
      </div>
      <div className="productContent">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "60%" }}>
            <div className="title">{props.title}</div>
          </div>
          <div>
            <Rating name="read-only" value={props.rating.rate} readOnly />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div className="price">${props.price}</div>
          <div >
          <Button variant="outlined" onClick={() => upd({ item: props.title, count: 1 })} startIcon={<ShoppingBasketIcon /> }>
          Add to cart
          </Button>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
