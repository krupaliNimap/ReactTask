import React from "react";
import { RouterProvider } from "react-router-dom";
import PrivateRouting from "./shared/PrivateRouting";
import "./App.css";
// import ApiCrud from "./components/apiCrud/ApiCrud";

function App() {
  return (
    <div className="demo">
      <RouterProvider router={PrivateRouting} />
      {/* <ApiCrud /> */}
    </div>
    // <>
    //   <HookExample />
    // </>
    // <>
    //   <Parent />
    // </>
  );
}

export default App;
