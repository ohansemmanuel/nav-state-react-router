import React from "react";
import { Redirect } from "react-router-dom";
import EmojiLand from "../components/EmojiLand";
import thinkHardImg from "../Images/thinkhard.png";
import emojiLand from "./emojiLand";
import { DO_SOMETHING_OVER } from "../constants/action-types";

const ThinkHard = ({ appState, handleEmojiAction }) => {
  return appState === DO_SOMETHING_OVER ? (
    <Redirect push to="/smile" />
  ) : (
    <EmojiLand
      EmojiBg="linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)"
      EmojiImg={thinkHardImg}
      EmojiBtnText="But why? Think hard . . ."
      HandleEmojiAction={handleEmojiAction}
      appState={appState}
    />
  );
};

export default emojiLand(ThinkHard);
