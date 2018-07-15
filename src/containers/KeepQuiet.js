import React from "react";
import { Redirect } from "react-router-dom";
import EmojiLand from "../components/EmojiLand";
import keepQuietImg from "../Images/keepquiet.png";
import emojiLand from "./emojiLand";
import { DO_SOMETHING_OVER } from "../constants/action-types";

const KeepQuiet = ({ appState, handleEmojiAction }) => {
  return appState === DO_SOMETHING_OVER ? (
    <Redirect push to="/excited" />
  ) : (
    <EmojiLand
      EmojiBg="linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"
      EmojiImg={keepQuietImg}
      EmojiBtnText="Keep Calm and Stay Quiet."
      HandleEmojiAction={handleEmojiAction}
      appState={appState}
    />
  );
};

export default emojiLand(KeepQuiet);
