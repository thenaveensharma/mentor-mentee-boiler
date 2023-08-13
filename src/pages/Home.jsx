import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/features/counterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div className=" h-screen w-full">
      <h1 className=" font-bold underline text-9xl text-black">
        Hi Curious Devs !
      </h1>
      <div className="bg-black w-400 h-screen text-white">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="w-10"
        >
          Increment
        </button>
        <h1>{count}</h1>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
