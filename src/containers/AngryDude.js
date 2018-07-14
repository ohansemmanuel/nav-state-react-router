import React, { Component } from "react";
import { connect } from "react-redux";
import { todoSomething } from "../actions";
import angryDudeImg from "../Images/angrydude.png";
import EmojiLand from "../components/EmojiLand";

class AngryDude extends Component {
  _handleEmojiAction = () => {
    this.props.todoSomething(3000);
  };
  render() {
    return (
      <EmojiLand
        EmojiBg="linear-gradient(-180deg, #611A51 0%, #10096D 100%)"
        EmojiImg={angryDudeImg}
        EmojiBtnText="I'm so pissed. Click me"
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
)(AngryDude);
