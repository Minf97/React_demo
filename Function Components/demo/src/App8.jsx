import React from "react";
import { connect } from "react-redux";

function App8(props) {
  return (
    <>
    <div>数字为：{props.num}</div>
    <button onClick={() => props.leijia()}>累加</button>
    </>
  )
}

// 状态映射：将reducer中的state映射成props，让我们可以使用reducer里的变量
const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};

// 事件派发映射：将reducer中的事件映射成props，让我们可以使用函数
const mapDispatchToProps = (dispatch) => {
    return {
        leijia() {
            const action = {type: 'addNum', value: 2};
            dispatch(action)
        }
    }
}

// export default connect(state映射, dispatch映射)(当前组件名称)App8;
export default connect(mapStateToProps, mapDispatchToProps)(App8);
