import React from 'react'
import React, { Component } from "react";

class Search extends Component {
  state = {
    image_src: ""
  };

  componentDidMount() {
    this.randomPup();
  }

  randomPup = () => {
    API.getRandomImage()
      .then(res => this.setState({ image_src: res.data.message }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Make New Friends</h1>
        <p className="text-center">
          Thumbs up on any pups you'd like to meet!
      </p>
        <figure>
          <img src={this.state.image_src} alt="Random Pup" />
          <figcaption><i className="far fa-thumbs-up"></i></figcaption>
          <figcaption><i className="far fa-thumbs-down"></i></figcaption>
        </figure>
        <h2 className="text-center">Made friends with 0 pups so far!</h2>
      </div>
    )
  }
}

export default Search