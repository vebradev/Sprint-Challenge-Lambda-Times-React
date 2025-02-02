import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      count: 0
    };
  }
  componentDidMount() {
    this.setState({ images: carouselData });
  }

  leftClick = () => {
    if (this.state.count === 0) {
      this.setState({ count: 3 });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  rightClick = () => {
    if (this.state.count !== this.state.images.length - 1) {
      this.setState({ count: this.state.count + 1 });
    } else {
      this.setState({ count: 0 });
    }
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.images[this.state.count]}
        style={{ display: "block" }}
        alt="Team Borja!"
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
