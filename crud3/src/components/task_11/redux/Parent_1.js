import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Child_1 from "./Child_1";
const Parent_1 = () => {
  return (
    <Provider store={store}>
      <div>
        <Child_1 />
      </div>
    </Provider>
  );
};

export default Parent_1;
