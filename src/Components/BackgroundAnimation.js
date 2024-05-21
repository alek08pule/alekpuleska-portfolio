import React, { useEffect } from "react";
import useWindowSize from "../Hooks/useWindowSize";

const colors = ["#0B0909", "#44444C", "#8C8C8C", "#D6D6D6", "#2B89B2"];
const numBalls = 100;

const BackgroundAnimation = () => {
  const { height } = useWindowSize();
  const { width } = useWindowSize();
  useEffect(() => {
    const bodyAnimation = document.querySelector(".bodyAnimation");
    const balls = [];
    let maxHeight = 530;
    if (height > 1080 || width < 640) {
      maxHeight = 2 * height;
    }

    console.log(height);
    console.log(maxHeight);

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * maxHeight)}px`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      bodyAnimation.append(ball);
    }

    balls.forEach((el, i) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 14,
      };

      el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, [width, height]);

  return <div className="bodyAnimation"></div>;
};

export default BackgroundAnimation;
