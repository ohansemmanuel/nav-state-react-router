import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { todoSomething } from "../actions";
import angryDudeImg from "../Images/angrydude.png";
import EmojiLand from "../components/EmojiLand";
import {
  DO_SOMETHING_OVER,
  DO_NOTHING,
  DO_SOMETHING
} from "../constants/action-types";

class AngryDude extends Component {
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
      <Redirect push to="/thumbs" />
    ) : (
      <EmojiLand
        EmojiBg="linear-gradient(-180deg, #611A51 0%, #10096D 100%)"
        EmojiImg={angryDudeImg}
        EmojiBtnText="I'm so pissed. Click me"
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
  { todoSomething }
)(AngryDude);
