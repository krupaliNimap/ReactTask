import React from "react";
import { RouterProvider } from "react-router-dom";
import PrivateRouting from "./shared/PrivateRouting";
import "./App.css";
import HookExample from "./HookExample";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="demo">
      <RouterProvider router={PrivateRouting} />
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
