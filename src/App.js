//autogen
//This is a stateful component

import React from 'react';
//import firebase;
//import './App.css';
//import my components
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';

//css stuff
const styles = {
  //text-align => textAlign inline styles inside component
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif'
}

class App extends React.Component{
  //state
  constructor(props){
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: 'Add course notes',
          details: 'Need to add more details'
        },
        {
          id: 2,
          title: 'Add life notes',
          details: 'Need to add more life notes'
        },
        {
          id: 3,
          title: 'Add car notes',
          details: 'Need to add more car'
        }
      ],
      name: 'Austin',
      currentTitle: '',
      currentDetails: '',
    }
  }

  //life cycle methods before handle stuff
  // componentWillMount(){
  //   firebase.initializeApp({
  //   apiKey: "AIzaSyBxhtTtwC4U67uxsAmmgaQBAuFaT9TodNQ",
  //   authDomain: "notepad-f50a2.firebaseapp.com",
  //   databaseURL: "https://notepad-f50a2.firebaseio.com",
  //   projectId: "notepad-f50a2",
  //   storageBucket: "notepad-f50a2.appspot.com",
  //   messagingSenderId: "3519935323",
  //   appId: "1:3519935323:web:f9ae25cf1583bf04"
  //   });
  // }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    //updates w/ input dynamically?
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    alert('Your note ${this.state.currentTitle} has been added.')
    event.preventDefault();
  }

  render(){
    return (
      <div className={styles}>
        <Header name = {this.state.name}/>
        <Form
          currentTitle = {this.state.currentTitle}
          currentDetails = {this.state.currentDetails}
          handleChange = {this.state.handleChange}
          handleSubmit = {this.state.handleSubmit}
        />
        <Grid notes = {this.state.notes}/>
      </div>
    );
  }
}

export default App;
