import React, { Component } from 'react'

interface StateType {
    isLoggedIn: boolean
}

export default class LoginStatus extends Component<{}, StateType> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    hangLelogin =() => {
        this.setState(prevLogin => ({
            isLoggedIn: !prevLogin.isLoggedIn}));
    }
  render() {
    return (
      <>
        {this.state.isLoggedIn ? <h2>Xin chào User</h2> : <h2>Vui lòng đăng nhập để tiếp tục</h2>  }
        <button onClick={this.hangLelogin}>{this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}</button>
      </>
    )
  }
}
