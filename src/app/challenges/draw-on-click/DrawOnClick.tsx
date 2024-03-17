"use client";

import React, { useState } from "react";

export const DrawOnClick = () => {
  const [circles, setCircles] = useState<
    { top: number; left: number; color: string }[]
  >([]);
  //   const canvas = document.getElementById("canvas");
  console.log("circles", circles);
  const handleClick = (e: React.MouseEvent) => {
    var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    setCircles((currentCircles) => [
      ...currentCircles,
      { left: e.clientX - 10, top: e.clientY - 10, color: randomColor },
    ]);
  };
  return (
    <div
      //   id="canvas"
      className="draw-container"
      onClick={handleClick}
    >
      {circles.map((circle) => (
        <div
          className="circle"
          style={{
            left: circle.left,
            top: circle.top,
            backgroundColor: circle.color,
          }}
        />
      ))}
      <style jsx>
        {`
          .draw-container {
            height: 50vh;
            width: 100%;
            border: 2px solid black;
          }
          .circle {
            position: absolute;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            border: 2px solid black;
          }
        `}
      </style>
    </div>
  );
};
