import React from "react";

export interface ButtonProps {
  width: number;
  background?: string;
  color: string;
  text: string;
  paddingRight?: number;
  weight?: string;
  onClick?: () => void;
}

export function Button({ width, background, color, weight, text, paddingRight, onClick }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: background,
        width: `${width}px`,
        color,
        borderRadius: "10px",
              height: "40px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: `${paddingRight}px`,
        fontWeight: weight
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}