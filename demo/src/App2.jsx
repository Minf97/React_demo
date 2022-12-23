import React, { Component } from 'react'

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }
  render() {
    return (
      <div>
        <div>数字：{this.state.num}</div>
        <button onClick={() => { this.setState({ num: this.state.num + 1 }) }}>累加</button>
        <button onClick={this.addNum.bind(this)}>按钮2 - 累加</button>
        <button onClick={() => { this.addNum() }}>按钮3 - 累加</button>
      </div>

    )
  }
  addNum() {
    this.setState({
      num: this.state.num + 1
    })
  }
}

