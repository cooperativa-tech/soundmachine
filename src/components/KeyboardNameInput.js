/** @jsx jsx */

import React, { useState } from "react";
import { jsx } from "@emotion/core";

export function KeyboardNameInput(props) {
  const [name, setName] = useState("");

  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <input
        placeholder="Your keyboard's name"
        value={name}
        onChange={e => setName(e.target.value)}
        css={{
          fontSize: 'inherit',
          fontFamily: 'inherit',
          height: 40,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 10,
          borderColor: "#2D2D2D",
          borderRadius: 4,
          borderWidth: 2,
          paddingRight: 10,
          marginRight: 10
        }}
      />
      <button disabled={!name} onClick={() => props.onComplete(name)} css={{
        backgroundColor: "#2D2D2D",
        color: "white",
        fontSize: 20,
        padding: `10px 20px`,
        borderRadius: 4
      }}>
        Share keyboard
      </button>
    </div>
  );
}
