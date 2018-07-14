import React from "react";
import { Redirect } from "react-router-dom";
import { DO_SOMETHING, DO_SOMETHING_OVER } from "../constants/action-types";

const EmojiLand = ({
  EmojiBg,
  EmojiImg,
  EmojiBtnText,
  HandleEmojiAction,
  appState
}) => {
  return appState === DO_SOMETHING_OVER ? (
    <Redirect to="/smile" />
  ) : (
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
