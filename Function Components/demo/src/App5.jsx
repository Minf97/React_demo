import React, { useState, createContext, useContext } from "react";

// 创建上下文空间（provider，Consumer）提供者/消费者
const NumContext = createContext();

function Child() {
  const { num, setNum } = useContext(NumContext);
  return (
    <>
      <h2>子组件 - {num}</h2>
      <button onClick={() => setNum(num + 1)}>点击num+1</button>
    </>
  );
}

// 父组件
const Father = () => <Child />;

// 顶级组件
export default function App5() {
  const [num, setNum] = useState(123);

  return (
    <NumContext.Provider value={{ num, setNum }}>
      <Father />
    </NumContext.Provider>
  );
}

// 你需要一个上下文空间，来避免一级一级传递
