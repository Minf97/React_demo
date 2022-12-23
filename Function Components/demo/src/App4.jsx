import React, { useState, createContext } from "react";

// 创建上下文空间（provider，Consumer）提供者/消费者
const NumContext = createContext();

function Child() {
  return (
    <NumContext.Consumer>
      {({ num, setNum }) => (
        <>
          <h2>子组件 - {num}</h2>
          <button onClick={() => setNum(num + 1)}>点击num+1</button>
        </>
      )}
    </NumContext.Consumer>
  );
}

// 父组件
const Father = () => <Child />;

// 顶级组件
export default function App4() {
  const [num, setNum] = useState(123);

  return (
    <NumContext.Provider value={{ num, setNum }}>
      <Father />
    </NumContext.Provider>
  );
}



// 你需要一个上下文空间，来避免一级一级传递