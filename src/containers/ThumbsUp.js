import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import EmojiLand from "../components/EmojiLand";
import { todoSomething, doNothing } from "../actions";
import thumbsUpImg from "../Images/thumbsup.png";
import {
  DO_SOMETHING_OVER,
  DO_NOTHING,
  DO_SOMETHING
} from "../constants/action-types";

class ThumbsUp extends Component {
  state = {
    appState: DO_NOTHING
  };

  _handleEmojiAction = () => {
    this.setState(
      {
        appState: DO_SOMETHING
      },
      this._handleSomethingOver
    );
  };

  _handleSomethingOver = () => {
    const self = this;
    setTimeout(() => {
      self.setState({
        appState: DO_SOMETHING_OVER
      });
    }, 3000);
  };

  render() {
    const { appState } = this.state;
    return appState === DO_SOMETHING_OVER ? (
      <Redirect push to="/quiet" />
    ) : (
      <EmojiLand
        EmojiBg="linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)"
        EmojiImg={thumbsUpImg}
        EmojiBtnText="You rock. Thumbs up!"
        HandleEmojiAction={this._handleEmojiAction}
        appState={appState}
      />
    );
  }
}

const mapStateToProps = ({ appState }) => ({
  appState
});

export default connect(
  mapStateToProps,
  { todoSomething, doNothing }
)(ThumbsUp);
