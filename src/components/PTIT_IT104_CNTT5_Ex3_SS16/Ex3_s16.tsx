import React, { Component } from 'react'
import './Button.css'

interface ButtonProps {
    nameButton: string[]
}

export default class button extends Component<{},ButtonProps> {
    constructor(props: {}) {
        super(props);
        this.state = {
            nameButton: ["Primary","Secondary","Success","Danger","Warning", "Info", "Light", "Dark", "Link"]
        }
    }
  render() {
    return (
      <div id='div'>
        {this.state.nameButton.map((but, index) => {
            return <button key={index} id={but}>{but}</button>
        })}
      </div>
    )
  }
}
