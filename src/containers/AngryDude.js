import React from "react";
import { Redirect } from "react-router-dom";
import angryDudeImg from "../Images/angrydude.png";
import EmojiLand from "../components/EmojiLand";
import { DO_SOMETHING_OVER } from "../constants/action-types";
import emojiLand from "./emojiLand";

const AngryDude = ({ appState, handleEmojiAction }) => {
  return appState === DO_SOMETHING_OVER ? (
    <Redirect
      push
      to={{
        pathname: "/thumbs",
        state: {
          humanType: "Cat Person",
          age: 12,
          sex: "none"
        }
      }}
    />
  ) : (
    <EmojiLand
      EmojiBg="linear-gradient(-180deg, #611A51 0%, #10096D 100%)"
      EmojiImg={angryDudeImg}
      EmojiBtnText="I'm so pissed. Click me"
      HandleEmojiAction={handleEmojiAction}
      appState={appState}
    />
  );
};

export default emojiLand(AngryDude);
