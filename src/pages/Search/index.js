import React, { Component } from 'react'
import API from '../../utils/API'

export default class Search extends Component {
  state = {
    search: "",
    results: []
  }
  
  componentDidMount () {
    this.dogBreed("husky")
  }
  
  handleInputChange = e => {
    const {name,value} = e.target;
    this.setState({[name]:value})
  }

  dogBreed = breed => {
    API.dogBreed(breed).then(res=> {
      console.log(res);
      this.setState({results:res.data.message})
    })
  }
  
  submitForm = e => {
    e.preventDefault();
    this.dogBreed(this.state.search);
    this.setState({search:""});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input name="search" onChange={this.handleInputChange} value={this.state.search}/>
          <button>Show me the puppies!</button>
        </form>
        {this.state.results.map(imgSrc=> <img src={imgSrc}/>)}
      </div>
    )
  }
}
