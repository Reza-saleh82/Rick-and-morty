import { Outlet, useParams } from "react-router";
import React from "react";
// import { container } from "./styles";

function Product() {
  const { id } = useParams();
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", height: "700px" }}>
      <div style={{ width: "40%", height: "100%", backgroundColor: "gray" }}>
        <Outlet />
      </div>
      <div style={{ width: "60%", height: "100%", backgroundColor: "blue" }}></div>
    </div>
  );
}

export default Product;