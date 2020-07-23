import React, { Component } from "react";

import { Fade } from "react-reveal";

import TypingDots from "../TypingDots/typingdots.jsx";
import Message from "../../container/message/message.jsx";

class Transition extends Component {
  constructor(props) {
    super(props);
    this.state = { start: props.start, date: new Date().getTime() };
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date().getTime(),
    });
  }

  render() {
    let show;
    if (this.state.date < this.state.start + 1500) {
      show = true;
    } else {
      show = false;
    }
    return (
      <div className="transition">
        <Fade left delay={this.props.delay}>
          {show ? (
            <TypingDots />
          ) : (
            <Message id={this.props.id} message={this.props.message} />
          )}
        </Fade>
      </div>
    );
  }
}

export default Transition;
