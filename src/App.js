import React, { Component } from 'react';
import './App.css';
import Modal from "react-modal";

const appElement = document.getElementById('root');
Modal.setAppElement(appElement);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
    this.handleModalOpen = this.handleModalOpen.bind(this);
  }
  handleModalOpen(){
    this.setState({modalOpen: true});
  }
  render() {
    return (
      <div className="vh-100 bg-green flex justify-center items-center">
        <button className="f1 outline-transparent dim b--none ph3 pv2 mb2 dib white bg-black br-100 h5 w5" 
        onClick={this.handleModalOpen}>Bored?
        </button>
        <Modal closeTimeoutMS={150} isOpen={this.state.modalOpen}>
          <h1>
            I like cheese
          </h1>
        </Modal>
      </div>
    );
  }
}

export default App;
