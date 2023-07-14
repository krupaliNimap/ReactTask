import "./App.css";
import { RouterProvider } from "react-router-dom";
import PrivateRouting from "./shared/PrivateRouting";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      {/* <RouterProvider router={PrivateRouting} /> */}
      <Home />
    </div>
  );
}

export default App;
