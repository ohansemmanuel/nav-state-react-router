import React from "react";
import { Redirect } from "react-router-dom";
import EmojiLand from "../components/EmojiLand";
import beExcitedImg from "../Images/beexcited.png";
import emojiLand from "./emojiLand";
import { DO_SOMETHING_OVER } from "../constants/action-types";

const BeExcited = ({ appState, handleEmojiAction }) => {
  return appState === DO_SOMETHING_OVER ? (
    <Redirect push to="/think" />
  ) : (
    <EmojiLand
      EmojiBg="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
      EmojiImg={beExcitedImg}
      EmojiBtnText="Someone's now excited. Yeah!"
      HandleEmojiAction={handleEmojiAction}
      appState={appState}
    />
  );
};

export default emojiLand(BeExcited);
