import React, {Component} from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    );
  }
}

export default App;
