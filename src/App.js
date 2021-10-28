import React, { Component } from 'react'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeastModal from './SelectedBeastModal.js';
import beast from './data.json';



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      featuredBeast: {
        title: '',
        description:'',
        image_url: '',
        horns: 0
      },
      show : false
    }
  }

  changeBeast = (beast) => {
    this.setState({
      featuredBeast: beast
    })
    this.showModal();
  }

  hideModal = () => {
    this.setState({show: false})
  }

  showModal = () => {
    this.setState({show: true})
  }

  render() {
    return (
      <div>
        { <>
          <Header />
          <Main changeBeast={this.changeBeast} beast={beast}/>
          <Footer />
          <SelectedBeastModal featuredBeast={this.state.featuredBeast} hideModal={this.hideModal} show={this.state.show} />
          </>
        }
      </div>
    )
  }
}