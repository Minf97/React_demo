import React from "react";

// 类组件
const msg = "你好世界";
const myStyle = { backgroundColor: 'pink' };

let flag = true;  //true时表示粉色，flase时表示蓝色

let arr = ["刘备", "关羽", "张飞"]

export default class App1 extends React.Component {
    render() {
        return (
            <div>
                <h2>{msg}</h2>
                <hr />

                {/* htmlFor和for */}
                <label htmlFor="username">用户名</label>
                <input type="text" id="username" />
                <hr />

                {/* className与class */}
                <div className="box">盒子</div>
                <hr />

                {/* style行内样式的写法 */}
                <div style={{ backgroundColor: 'skyblue' }}>内容内容</div>
                <div style={myStyle}>第二种</div>
                <hr />

                {/* 三元运算符 */}
                <div style={{ backgroundColor: flag ? 'pink' : 'skyblue' }}>内容内容</div>
                <hr />

                {/* for循环 */}
                <ul>
                    {
                        // react中的列表循环有且只有map可以使用
                        arr.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
                <hr />
            </div>
        )
    }
}
