import { Outlet, useParams } from "react-router";
import React from "react";
// import { container } from "./styles";

function Product() {
  const { id } = useParams();
  console.log('reza');
  
  return (
    <div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default Product;