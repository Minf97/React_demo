import React, { useState } from "react";

// 父组件
function Father(props) {
  return <Child num={props.num} changeNumFn={props.changeNumFn} />;
}

function Child(props) {
  return (
    <>
      <h2>子组件 - {props.num}</h2>
      <button onClick={() =>props.changeNumFn()}>修改Num</button>
    </>
  );
}

// 顶级组件
export default function App3() {
  const [num, setNum] = useState(123);
  // 提供给子组件用来修改num的函数
  const changeNumFn = () => setNum(456);

  return <Father num={num} changeNumFn={changeNumFn} />;
}
