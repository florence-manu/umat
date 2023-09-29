import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  width: number;
  background?: string;
  color: string;
  text: string;
  onClick?: () => void;
}

export function Button({ width, background, color, text, onClick }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: background,
        width: `${width}px`,
        color,
        borderRadius: "10px",
              height: "40px",
              cursor: "pointer",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}