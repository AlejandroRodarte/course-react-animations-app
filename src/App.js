import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    showModal: false
  };

  modalClosedHandler = () => this.setState(() => ({ showModal: false }));
  
  modalOpenedHandler = () => this.setState(() => ({ showModal: true }));

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        { this.state.showModal && <Modal show closed={ this.modalClosedHandler } /> }
        { this.state.showModal && <Backdrop show closed={ this.modalClosedHandler } /> }
        <button className="Button" onClick={ this.modalOpenedHandler }>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }

}

export default App;
