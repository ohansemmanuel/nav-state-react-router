import React from "react";
import { Redirect } from "react-router-dom";
import EmojiLand from "../components/EmojiLand";
import thumbsUpImg from "../Images/thumbsup.png";
import { DO_SOMETHING_OVER } from "../constants/action-types";
import emojiLand from "./emojiLand";

const ThumbsUp = ({ appState, handleEmojiAction, location }) => {
  return appState === DO_SOMETHING_OVER ? (
    <Redirect push to="/quiet" />
  ) : (
    <EmojiLand
      EmojiBg="linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)"
      EmojiImg={thumbsUpImg}
      EmojiBtnText="You rock. Thumbs up!"
      HandleEmojiAction={handleEmojiAction}
      appState={appState}
      locationState={location.state}
    />
  );
};

export default emojiLand(ThumbsUp);
