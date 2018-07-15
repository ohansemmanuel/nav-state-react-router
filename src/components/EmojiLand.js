import React from "react";
import { DO_SOMETHING } from "../constants/action-types";

const EmojiLand = ({
  EmojiBg,
  EmojiImg,
  EmojiBtnText,
  HandleEmojiAction,
  appState
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
    </section>
  );
};

export default EmojiLand;
