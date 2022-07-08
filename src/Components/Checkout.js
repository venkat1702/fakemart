import React from "react";
import Header from "../Components/Header";
import { useSelector } from "react-redux";

function Checkout() {
  const details = useSelector((state) => state.details);
  let total = 0;
  details.map((item) => (total += item.price * item.count));
  return (
    <div>
      <Header />
      <div className="checkoutContainer">
        <div className="checkout">
          <table>
            <tr>
              <th style={{textAlign:"left"}}>Products</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {details.map((item) => (
              <tr>
                <td onClick={()=>console.log(item.count)} style={{textAlign:"left"}} >{item.title}</td>
                <td>{item.count}</td>
                <td>$ {item.price}</td>
              </tr>
            ))}
          </table>
          <p style={{float:"right"}}>$ {total}</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
