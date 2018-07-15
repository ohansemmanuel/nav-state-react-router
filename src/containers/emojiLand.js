import React, { Component } from "react";
import {
  DO_SOMETHING,
  DO_NOTHING,
  DO_SOMETHING_OVER
} from "../constants/action-types";

function emojiLand(EmojiComponent) {
  class ComposedEmojiComponent extends Component {
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
      }, 1000);
    };

    render() {
      return (
        <EmojiComponent
          {...this.props}
          appState={this.state.appState}
          handleEmojiAction={this._handleEmojiAction}
        />
      );
    }
  }

  return ComposedEmojiComponent;
}

export default emojiLand;
