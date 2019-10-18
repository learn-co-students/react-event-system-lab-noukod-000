// Code Keypad Component Here

import React, { Component } from 'react';

class Keypad extends React.Component {

    handleInput = () => console.log('Entering password...')
    //  handleInput = () => console.log('HEllo')      


    render(){  
        return(
            <div>
                <h4>Text Input</h4>
                <input type="password" onKeyUp={this.handleInput} />
            </div>
        )
    }
}

export default Keypad;