/* eslint-disable import/no-anonymous-default-export */
// 创建初始状态
const defaultState = {
  num: 1,
};

// 导出一个函数
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  if (action.type == "addNum") {
    newState.num += action.value;
  }
  return newState;
};
