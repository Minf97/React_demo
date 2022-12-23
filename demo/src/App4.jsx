import React, { Component } from 'react';

export default class App4 extends Component {
  render() {
    return (
      <div className='box'>
        <button onClick={this.btnClick.bind(this)}>按钮1</button>
        <button onClick={this.btnClick.bind(this)}>按钮2</button>
      </div>
    )
  }
  btnClick() {

  }
}
