import React, { Component } from 'react';
import { carouselData } from '../../data'

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      positon: 0
    }
  }
  //mounting data to state
  componentDidMount(){
    this.setState ({images: carouselData})
  }

  leftClick = () => {
    this.setState({
      position: this.state.position < this.state.images.length - 1 ? this.state.position + 1 : 0
    })
  }
  rightClick = () => {
    this.setState({
      position: this.state.position > 0 ? this.state.position - 1 : this.state.images.length - 1
    })
  }
  selectedImage = () => {
    return <img alt ="carousel" src={this.state.images[this.state.position]} style={{display: 'block'}} />
  }
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <this.selectedImage />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}