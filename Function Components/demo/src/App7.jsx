import React, { useState, memo, useCallback, useMemo } from "react";

const Child = memo((props) => {
  console.log(123);
  return <button onClick={() => props.doSth()}>累加</button>;
});

export default function App7() {
  const [num, setNum] = useState(1);

  const doSth = useCallback(() => setNum((num) => num + 1), []);

  // 函数中返回函数：高阶函数
  const doSth1 = useMemo(() => {
    return setNum((num) => num + 1), [];
  });

  return (
    <div>
      <h3>数字为：{num}</h3>
      <Child doSth={doSth} />
    </div>
  );
}

// 缓存组件不受父组件更新的影响 memo

// 缺点：只有该组件为纯静态页面展示时才有用，涉及使用函数等动态渲染问题就不行了
