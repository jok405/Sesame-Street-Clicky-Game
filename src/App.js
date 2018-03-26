/*    Sesame Street Clicky Game | University of Richmond | John Kim   */

import React, { Component } from "react";
import Navbar from "./components/Navbar/index.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js"

import muppets from "./muppets.json";
import Muppetcard from "./components/Body/muppets.js";
import Wrapper from "./components/Wrapper/index.js"
import "./app.css"
import Footer from "./components/Footer/footer.js"

class App extends Component {

  state = {
    score: 0,
    highscore: 0,
    clicks: [],
    quote: "",
    muppets
  };

  componentDidMount = () => {
    this.quote("Sesame Street")
  }

  quote = quote => {
    this.setState({quote: quote})
  }

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  checkClick = id => {
    if(this.state.clicks.includes(id)){
      this.setState({ score: 0, clicks: []});

    } else {
        if (this.state.score + 1 > this.state.highscore) {
          this.setState({
              highscore: this.state.score + 1
          })
        }
      this.state.clicks.push(id)
      this.setState({ score: this.state.score + 1});
    }
  };

  handleOnchange = (id, phrase) => {
    this.checkClick(id)
    this.shuffleArray(this.state.muppets)
    this.setState({quote: phrase})
  };

  render() {
    return (
      <div>
        <Navbar quote = {this.state.quote} score = {this.state.score} highscore={this.state.highscore}/>
        <Jumbotron/>
          <Wrapper >
            {this.state.muppets.map(muppets => (
              <span key={muppets.id}>
                <Muppetcard
                  handleOnchange={this.handleOnchange}
                  id={muppets.id}
                  name={muppets.name}
                  image={muppets.image}
                />
                </span>
            ))}
          </Wrapper>
        <Footer />
    </div>
    );
  }
}

export default App;
