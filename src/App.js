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
         <header className="flex justify-end">
         <button>X</button>
           </header>
         <main>
           <h1>Look a modal!</h1>
         </main>
         <footer>
           <h2>Nothing to see here.</h2>
         </footer>
        </Modal>
      </div>
    );
  }
}

export default App;
