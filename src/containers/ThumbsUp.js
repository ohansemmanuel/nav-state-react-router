import React, { Component } from "react";
import { connect } from "react-redux";
import EmojiLand from "../components/EmojiLand";
import { todoSomething } from "../actions";
import thumbsUpImg from "../Images/thumbsup.png";

class ThumbsUp extends Component {
  render() {
    return (
      <EmojiLand
        EmojiBg="linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)"
        EmojiImg={thumbsUpImg}
        EmojiBtnText="You rock. Thumbs up!"
        HandleEmojiAction={this._handleEmojiAction}
        appState={this.props.appState}
      />
    );
  }
}

const mapStateToProps = ({ appState }) => ({
  appState
});

export default connect(
  mapStateToProps,
  { todoSomething }
)(ThumbsUp);
