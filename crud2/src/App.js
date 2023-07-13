import "./App.css";
import { RouterProvider } from "react-router-dom";
import PrivateRouting from "./shared/PrivateRouting";

function App() {
  return (
    <div>
      <RouterProvider router={PrivateRouting} />
    </div>
  );
}

export default App;
