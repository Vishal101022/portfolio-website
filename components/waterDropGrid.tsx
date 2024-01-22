"use client";
import React from "react";
import anime from "animejs";

const WaterDropGrid = () => {
  return (
    <div className="relative max-sm:hidden md:block grid place-content-center px-8 py-12">
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 20;
const GRID_HEIGHT = 15;

const DotGrid = () => {
  const handleDotClick = (e: any) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group rounded-full p-2 transition-colors hover:bg-green-300"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-3 w-3 rounded-full bg-gradient-to-b from-slate-300 to-slate-400 opacity-50 group-hover:from-green-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
