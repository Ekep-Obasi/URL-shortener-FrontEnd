import {Component} from "react";
import './StopWatch.css';


export default class StopWatch extends Component {

  constructor() {
    super();
    this.state = {
      value: 0, 
      state: false,
    }
  }

  StartWatch() {
    this.interval = setInterval(() => {
      this.setState({
        value: this.state.value + 133,
      })
    }, 133) 
    this.setState({
      state: false,
    })
  }

  
  StopWatch() {
    this.setState({
      value: 0,
      state: true,
    })
    clearInterval(this.interval);
  }


  render() {
    const milliseconds = this.state.value;
    const seconds = Math.floor(milliseconds/1000);
    const minutes = Math.floor(seconds/60);
    return(
      <div className="StopWatch">
      <h1>StopWatch</h1>
      <h3>{minutes % 60}:{seconds % 60}:{milliseconds % 1000}</h3>
      {
      this.state.state ?<button type="button" onClick={this.StartWatch.bind(this)} >Start</button>:
      <button type="button" onClick={this.StopWatch.bind(this)} >Stop</button>
      }
      </div>
    )
  }

}