// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends React.Component {


  focusEv = (event) => {
    console.log('Good!')
  }

  blurEv = (event) => {
      console.log('Hey! Eyes on me!')
  }


  render() {
    return (

           <button onBlur={this.blurEv} onFocus={this.focusEv}></button>

    )
 }
}
