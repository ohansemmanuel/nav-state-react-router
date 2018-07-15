import React, { Component } from "react";
import { connect } from "react-redux";
import EmojiLand from "../components/EmojiLand";
import { todoSomething } from "../actions";
import keepQuietImg from "../Images/keepquiet.png";

class KeepQuiet extends Component {
  _handleEmojiAction = () => {
    this.props.todoSomething(3000);
  };

  render() {
    return (
      <EmojiLand
        EmojiBg="linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"
        EmojiImg={keepQuietImg}
        EmojiBtnText="Keep Calm and Stay Quiet."
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
)(KeepQuiet);
