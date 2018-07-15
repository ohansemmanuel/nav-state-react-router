import React, { Component } from "react";
import { connect } from "react-redux";
import EmojiLand from "../components/EmojiLand";
import { todoSomething } from "../actions";
import beExcitedImg from "../Images/beexcited.png";

class BeExcited extends Component {
  _handleEmojiAction = () => {
    this.props.todoSomething(3000);
  };

  render() {
    return (
      <EmojiLand
        EmojiBg="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
        EmojiImg={beExcitedImg}
        EmojiBtnText="Someone's so excited!"
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
)(BeExcited);
