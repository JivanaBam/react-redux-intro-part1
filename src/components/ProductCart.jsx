import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ProductCart = () => {
  const values = useSelector((state) => state.counter);
  //   console.log(values);
  return (
    <div>
      <Typography>ProductCard</Typography>
      <Typography variant="contained">{values.count}</Typography>
    </div>
  );
};

export default ProductCart;
