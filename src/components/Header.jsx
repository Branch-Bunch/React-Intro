import React from 'react'
import logo from '../logo.svg'
import '../containers/App.css'

export default class Header extends React.Component {
  render() {
    return(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Intro to React @CUHacking</h2>  
      </div> 
    )   
  }
}
