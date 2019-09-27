/** @jsx jsx */

import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/core";
import Popup from "reactjs-popup";

import globalState from "../state";
import db from "../db";
import { share } from "../ipfs";
import { KeyboardNameInput } from "./KeyboardNameInput";

export function Share() {
  const [state, setState] = useState({ hash: null, name: null });

  useEffect(() => {
    if (!!state.name && !!state.hash) {
      db.keyboards
        .put(state)
        .then(console.log)
        .catch(console.error);
    }
  }, [state]);

  return (
    <Popup
      trigger={
        <button
          css={{
            backgroundColor: "#2D2D2D",
            color: "white",
            fontSize: 20,
            padding: `10px 20px`,
            marginRight: 40,
            borderRadius: 4
          }}
        >
          Save and Share
        </button>
      }
      modal
      position="right center"
      onOpen={() => {
        globalState.sharingFocused = true;

        share().then(async hash => {
          await db.keyboards.put({ hash, name: "my random name" });
          setState({ ...state, hash });
        });
      }}
      onClose={() => {
        globalState.sharingFocused = false;
        setState({ hash: null, name: null });
      }}
      contentStyle={{ padding: 40, borderRadius: 4 }}
    >
      <>
        {!state.name ? (
          <KeyboardNameInput
            onComplete={name => setState({ ...state, name })}
          />
        ) : !state.hash ? (
          <div>loading...</div>
        ) : (
          <div>
            <p>Share this link</p>
            <a
              href={`${window.location}?hash=${state.hash}`}
            >{`${window.location}?hash=${state.hash}`}</a>
          </div>
        )}
      </>
    </Popup>
  );
}
