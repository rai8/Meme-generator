import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImg: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json()) //this turns into javascript object
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImg: memes });
      });
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            placeholder="Top text"
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            placeholder="Bottom text"
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <br />
          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText} </h2>
          <h2 className="bottom">{this.state.bottomText} </h2>
        </div>
      </div>
    );
  }
}
export default MemeGenerator;
