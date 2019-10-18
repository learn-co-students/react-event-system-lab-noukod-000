// Code EyesOnMe Component Here

import React, { Component } from 'react';

class EyesOnMe extends React.Component {
    handleFocus = () => console.log('Good!')
    handleBlur = () => console.log('Hey! Eyes on me!')
    
    render (){
        return(
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur} >Click Me </button>
            </div>
        )
    }
}

export default EyesOnMe;