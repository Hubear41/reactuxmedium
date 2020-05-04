import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./loading_animations/410-lego-loader.json";
import * as doneData from "./loading_animations/433-checked-done.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Loading() {
  const [done, updateDone] = useState(false);
  const [loading, updateLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((json) => {
          updateLoading(true);
          setTimeout(() => updateDone(true), 1000);
        });
    }, 1800);
  }, []);

  return (
    <div>
      {!done ? (
        <FadeIn>
          <div className="d-flex justify-content-center align-items-center">
            <h1>fetching pizza</h1>
            {!loading ? (
              <Lottie options={defaultOptions} height={120} width={120} />
            ) : (
              <Lottie options={defaultOptions2} height={120} width={120} />
            )}
          </div>
        </FadeIn>
      ) : (
        <h1>hello world!</h1>
      )}
    </div>
  );
}
