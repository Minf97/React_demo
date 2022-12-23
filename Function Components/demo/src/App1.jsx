import { useState } from "react";

export default function App1() {
  // Hook只能应用在组件函数

  const [msg, setMsg] = useState("你好世界");

  const fn = () => {
    setMsg("hello world")
  };

  return (
    <div>
      <h2>{msg}</h2>
      <button onClick={fn}>修改msg</button>
    </div>
  );
}
