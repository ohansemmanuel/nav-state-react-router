import React, { Component } from "react";
import { connect } from "react-redux";
import EmojiLand from "../components/EmojiLand";
import { todoSomething } from "../actions";
import thinkHardImg from "../Images/thinkhard.png";

class ThinkHard extends Component {
  _handleEmojiAction = () => {
    this.props.todoSomething(3000);
  };

  render() {
    return (
      <EmojiLand
        EmojiBg="linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)"
        EmojiImg={thinkHardImg}
        EmojiBtnText="Thinking hard . . ."
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
)(ThinkHard);
