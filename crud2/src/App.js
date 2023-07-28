import "./App.css";
import { RouterProvider } from "react-router-dom";
import PrivateRouting from "./shared/PrivateRouting";
import { Suspense } from "react";
import LoaderTest from "./shared/LoaderTest";

function App() {
  return (
    // <div>
    <Suspense fallback={<LoaderTest />}>
      <RouterProvider router={PrivateRouting} />
    </Suspense>
    // </div>
  );
}

export default App;
