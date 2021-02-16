import React, { Component } from 'react';
import Card from "../components/Card";
import API from "../utils/API";
import "./style.css";

export default class Discover extends Component {
  state = {
    image: "",
    counter: 0,
    previousLike: false
  };

  componentDidMount() {
    this.nextPup();
  }

  nextPup = () => {
    API.randomPup()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      ).catch(err => console.log(err));
  };

  likedDog = () => {
    const ranNum = Math.floor(Math.random() * 5) + 1;
    if (ranNum === 5) {
      this.setState({ 
        counter: this.state.counter+1,
        previousLike: true
       })
    } else {
      this.setState({previousLike:false})
    }
    this.nextPup()
  }

  dislikedDog = () => {
    this.nextPup();
    this.setState({previousLike:false})
  }

  render() {
    return (
      <div className="discover">
        <h1>Discover Page</h1>
        {this.state.previousLike ? <h2> Yay! The dog liked you!</h2> : null}
        <img src={this.state.image} />
        <h3>{this.state.counter} dog(s) have liked you so far!</h3>
        <button onClick={this.likedDog}>Like</button>
        <button onClick={this.dislikedDog}>Dislike</button>
      </div>
    )
  }
}
