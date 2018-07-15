import React from "react";
import _ from "lodash";
import { DO_SOMETHING } from "../constants/action-types";

const EmojiLand = ({
  EmojiBg,
  EmojiImg,
  EmojiBtnText,
  HandleEmojiAction,
  appState,
  locationState
}) => {
  return (
    <section className="EmojiLand" style={{ background: EmojiBg }}>
      <img src={EmojiImg} className="EmojiLand__img" alt="Emoji" />
      <button onClick={HandleEmojiAction} className="EmojiLand__btn">
        <span>{EmojiBtnText}</span>
        {appState === DO_SOMETHING ? (
          <span className="EmojiLand__loader" />
        ) : null}
      </button>
      {locationState && (
        <pre>
          <span>Here's the info passed in: </span>
          {_.map(locationState, (val, key) => (
            <span key={key}>
              {" "}
              {key} is <span className="EmojiLand__highlight">{val}</span>{" "}
            </span>
          ))}
        </pre>
      )}
    </section>
  );
};

export default EmojiLand;
