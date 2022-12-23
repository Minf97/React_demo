/**
 * App > Home + List + Detail
 * react-router-dom中有两种模式：BrowserRouter（History模式） HashRouter（Hash模式）
 */

import App from "../App9";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import List from "../pages/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 定义一个路由
const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default BaseRouter;
