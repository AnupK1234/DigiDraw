import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Board = () => {
  const canvasRef = useRef(null);
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // On mount
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);
  console.log(color, size);
  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
