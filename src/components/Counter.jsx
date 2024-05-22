import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../store/slice/counterSlice";

const Counter = () => {
  const values = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  //   console.log(values);
  return (
    <Box>
      <Button
        onClick={() => {
          dispatch(decrementCount());
        }}
      >
        decrease count
        {/* <Typography variant="h3">-</Typography> */}
      </Button>
      <Typography variant="h3">count:{values.count}</Typography>
      <Button
        onClick={() => {
          dispatch(incrementCount());
        }}
      >
        increase count
        {/* <Typography variant="h3"> +</Typography> */}
      </Button>
    </Box>
  );
};

export default Counter;
