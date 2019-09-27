/** @jsx jsx */

import React, { useState } from "react";
import Popup from "reactjs-popup";
import { jsx } from "@emotion/core";

import { download } from "../ipfs";

const hashInQueryParams = querystring("hash")[0];

function querystring(obj) {
  const result = [];
  let match;
  const re = new RegExp("(?:\\?|&)" + obj + "=(.*?)(?=&|$)", "gi");
  while ((match = re.exec(document.location.search)) !== null) {
    result.push(match[1]);
  }
  return result;
}

export function Download() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    await download(hashInQueryParams);
    window.location = window.location.href.split("?")[0];
  };

  return hashInQueryParams ? (
    <Popup contentStyle={{ padding: 40 }} modal open>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <div css={{ marginBottom: 20 }}>
            Do you want to replace your existing keyboard with the new one?
          </div>
          <button onClick={handleDownload} css={{ marginRight: 20 }}>
            Yes!
          </button>
          <button
            onClick={() => {
              window.location = window.location.origin;
            }}
          >
            No
          </button>
        </>
      )}
    </Popup>
  ) : null;
}
