import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import EmojiLand from "../components/EmojiLand";
import beExcitedImg from "../Images/beexcited.png";
import emojiLand from "./emojiLand";
import { DO_SOMETHING_OVER } from "../constants/action-types";

const BeExcited = ({ appState, handleEmojiAction, push }) => {
  if (appState === DO_SOMETHING_OVER) {
    push("/think");
  }
  return (
    <EmojiLand
      EmojiBg="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
      EmojiImg={beExcitedImg}
      EmojiBtnText="Someone's now excited. Yeah!"
      HandleEmojiAction={handleEmojiAction}
      appState={appState}
    />
  );
};

export default connect(
  null,
  { push }
)(emojiLand(BeExcited));
