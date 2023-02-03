import React from "react";
import { StoreContext } from "../store/AppContext";

export default function Product() {
  const data = StoreContext();
  console.log(data);
  return <div>Product</div>;
}
