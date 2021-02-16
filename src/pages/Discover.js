import React, { Component } from 'react';
import Card from "../components/Card";
import API from "../utils/API";

export default class Discover extends Component {
  state = {
    image: "",
    match: false,
    counter: 0
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



  render() {
    return (
      <div>
        <h1 className="text-center">Make New Friends</h1>
        <h2 className="text-center">
          Thumbs uh2 on any pups you'd like to meet!
      </h2>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">Made friends with {this.state.counter} pups so far!</h1>
      </div>
    )
  }
}
