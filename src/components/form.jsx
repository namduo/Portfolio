import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleNameChange(name) {
    this.setState({name});
  }

  handleEmailChange(email) {
    this.setState({email});
  }

  handleMessageChange(message) {
    this.setState({message});
  }


  handleSubmit(e) {
    e.preventDefault();


    // this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form 
      className="" 
      onSubmit={ this.handleSubmit }>

        <div>
        <label>NAME</label>
        <input 
        type="text" 
        name="name"
        value={ this.state.name }
        onChange={ event => this.handleNameChange(event.target.value) } />

        <label>EMAIL</label>
        <input 
        type="email" 
        name="email"
        value={ this.state.email }
        onChange={ event => this.handleEmailChange(event.target.value) } />
        </div>

        <div>
        <label>MESSAGE</label>
        <textarea 
        type="message" 
        name="message"
        value={ this.state.message }
        onChange={ event => this.handleMessageChange(event.target.value) } />

        <input 
        className="submit" 
        type="submit" 
        value="SEND"/>
        
        </div>
      </form>
    );


  }
}

export default Form;
