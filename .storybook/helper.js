import React from "react";

export function Container(props) {
  return (
    <div style={{ width: props.width || 600, margin: "0 auto" }}>
      {props.children}
    </div>
  );
}
