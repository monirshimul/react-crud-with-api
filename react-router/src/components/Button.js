import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <div >
                <button style={btnStyle}>X</button>
            </div>
        )
    }
}

const btnStyle = {
    backgroundColor: "white",
    color: "black",
    border: "2px solid #e7e7e7",
    ":hover": {
        backgroundColor: "gray"
    }

}


export default Button
