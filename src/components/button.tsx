import React from "react";
import styled from "styled-components";

export interface Button {
    width: number,
    background ?: string ,
    color: string,
    text: string,
}
export function Button({width, background, color, text}:Button) {
    return (
        <button
            style={{
                backgroundColor: background,
                width: `${width}px`,
                color: color,
                borderRadius: "10px",
                height: "40px"
            }}
        >
         {text}
        </button>
    )
}