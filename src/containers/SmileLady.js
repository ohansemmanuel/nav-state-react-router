import React, { Component } from "react";
import { connect } from "react-redux";
import EmojiLand from "../components/EmojiLand";
import { todoSomething } from "../actions";
import smileLadyImg from "../Images/smilelady.png";

class SmileLady extends Component {
  _handleEmojiAction = () => {
    this.props.todoSomething(3000);
  };

  render() {
    return (
      <EmojiLand
        EmojiBg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        EmojiImg={smileLadyImg}
        EmojiBtnText="Smile...yea, smile!"
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
)(SmileLady);
