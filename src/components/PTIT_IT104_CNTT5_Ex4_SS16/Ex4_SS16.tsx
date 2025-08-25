import React, { Component } from 'react'

interface StataType {
    count: number
}

export default class Ex4_SS16 extends Component<{}, StataType> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0
        }
    }
    clickBuntton = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        <h2>Số lần click: {this.state.count}</h2>
        <button onClick={this.clickBuntton}>Click</button>
      </div>
    )
  }
}
