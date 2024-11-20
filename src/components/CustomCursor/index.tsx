import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Cursor = styled.div<{ x: number; y: number }>`
  position: fixed;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: rgb(255 238 186);
  opacity:20%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 100;
  transition: transform 0.15s ease;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
`;

const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [smoothCursorPosition, setSmoothCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCursor = () => {
      setSmoothCursorPosition((prev) => ({
        x: prev.x + (cursorPosition.x - prev.x),
        y: prev.y + (cursorPosition.y - prev.y),
      }));
      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorPosition]);

  return <Cursor x={smoothCursorPosition.x} y={smoothCursorPosition.y} />;
};

export default CustomCursor;
