import React, { Component } from 'react';
import './App.css';

const endDate = new Date(Date.parse("13. juni 2017"));

const getTimeRemaining = (endDate) => {
  const t = Date.parse(endDate) - Date.parse(new Date());
  const seconds = Math.floor( (t/1000) % 60 );
  const minutes = Math.floor( (t/1000/60) % 60 );
  const hours = Math.floor( (t/(1000*60*60)) % 24 );
  const days = Math.floor( t/(1000*60*60*24) );
  return {
    days,
    hours,
    minutes,
    seconds
  };
}


class App extends Component {

  state = {
    remaining: null
  };

  componentDidMount() {
    this.tick()
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick = () => {
    let remaining = getTimeRemaining(endDate)
    this.setState({remaining: remaining })
  }

  render() {
    if (!this.state.remaining) return null;

    const {days, hours, minutes, seconds} = this.state.remaining;
    const remaining = `${days} ${days > 1 ? 'dager' : 'dag'} `
      + `${hours} ${hours > 1 ? 'timer' : 'time'} `
      + `${minutes} ${minutes > 1 ? 'minutter' : 'minutt'} `
      + `${seconds} ${seconds > 1 ? 'sekunder' : 'sekund'} `;

    return (
      <div className="react-count-down">
        <span className="date">
          {remaining}
        </span>
        <p className="subtitle">til innlevering av master</p>
      </div>
    )
  };
}

export default App;
