import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./410-lego-loader.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  renderSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Loading() {
  const [done, updateDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((json) => updateDone(true));
    }, 1800);
  }, []);

  return (
    <div>
      {!done ? (
        <FadeIn>
          <div className="d-flex justify-content-center align-items-center">
            <h1>fetching pizza</h1>
            <Lottie options={defaultOptions} height={120} width={120} />
          </div>
        </FadeIn>
      ) : (
        <h1>hello world!</h1>
      )}
    </div>
  );
}
