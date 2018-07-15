import React from "react";
import { Redirect } from "react-router-dom";
import EmojiLand from "../components/EmojiLand";
import smileLadyImg from "../Images/smilelady.png";
import emojiLand from "./emojiLand";
import { DO_SOMETHING_OVER } from "../constants/action-types";

const SmileLady = ({ appState, handleEmojiAction }) => {
  return appState === DO_SOMETHING_OVER ? (
    <Redirect push to="/" />
  ) : (
    <EmojiLand
      EmojiBg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      EmojiImg={smileLadyImg}
      EmojiBtnText="Smile...yea, smile!"
      HandleEmojiAction={handleEmojiAction}
      appState={appState}
    />
  );
};

export default emojiLand(SmileLady);
