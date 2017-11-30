import React, { Component } from 'react';

import Header from '../components/header';
import About from '../components/about';
import Contact from '../components/contact';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Contact />
      </div>
    );
  }
}

export default Home;
