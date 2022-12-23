import { useState, useEffect } from "react";

export default function App2() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);

  // 想检测哪个数据，就在数组里填
  // 什么都不填的话，会监听所有数据
  useEffect(() => {
    console.log("只监听num1");
  }, [num1]);

  // 模拟 mounted，一般在这里做ajax
  useEffect(() => {
    console.log("挂载成功");
  }, []);

  // 模拟 beforeDestory，一般在这里做垃圾回收
  useEffect(() => {
    return () => {
      console.log("销毁阶段");
    };
  });

  return (
    <div>
      <div>数字1为：{num1}</div>
      <button
        onClick={() => {
          setNum1(num1 + 1);
        }}
      >
        点击num1+1
      </button>
      <hr />
      <div>数字2为：{num2}</div>
      <button
        onClick={() => {
          setNum2(num2 + 1);
        }}
      >
        点击num2+1
      </button>
    </div>
  );
}

/**
 * 函数式组件没有生命周期
 *
 * 【vue】mounted   updated      beforeDestory
 *
 * 数据请求  检测数据更新    垃圾回收
 *
 * useEffect
 */
