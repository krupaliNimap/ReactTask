import "./App.css";
import { RouterProvider } from "react-router-dom";
import PrivateRouting from "./shared/PrivateRouting";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={PrivateRouting} />
      </Suspense>
    </div>
  );
}

export default App;
