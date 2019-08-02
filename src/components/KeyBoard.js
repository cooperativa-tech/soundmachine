/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

export const Key = ({ leftMargin, selected, hasRecording, isRecording, ...props }) => (
  <div
    css={{
      width: 70,
      height: 70,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      if(isRecording) {
        background: "#E24E4E",
      } else if (hasRecording) {
        background: "#0078F0",
      } else {
        background: "#2D2D2D;",
      }
      boxShadow: hasRecording ? "0px 12px 20px rgba(0, 120, 240, 0.28)" : "0px 8px 20px rgba(22, 22, 22, 0.28)",
      boxSizing: "border-box",
      borderRadius: 8,
      color: "#FFF",
      marginLeft: leftMargin ? 10 : 0,
      position: "relative",
    }}
    {...props}
  >
    <span css={{ color: selected ? "black" : "white" }}>{props.keycode}</span>
  </div>
);

export const Row = props => (
  <div
    css={{
      display: "flex"
    }}
    {...props}
  >
    {props.children}
  </div>
);
