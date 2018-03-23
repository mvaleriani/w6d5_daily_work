import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.intId = 0;
  }

  render() {
    return (
      <div className="clock">
        <ul className="time">
          <label >Time:</label>
          <p> {this.state.date.getHours()}:{this.state.date.getMinutes()}:
            {this.state.date.getSeconds()} </p>
        </ul>

        <ul className="date">
          <label>Date:</label>
          <p> {this.state.date.getMonth() + 1}/{this.state.date.getDay() + 1}/
            {this.state.date.getYear()-100} </p>
        </ul>
      </div>

    );
  }

  tick() {
    this.setState({date: new Date()});
  }

  componentDidMount() {
    this.intId = setInterval(this.tick.bind(this), 1000);
    console.log('Clock did mount.');
  }

  componentWillUnmount() {
    clearInterval(this.intId);
    this.intId = 0;
  }
}

export default Clock;
