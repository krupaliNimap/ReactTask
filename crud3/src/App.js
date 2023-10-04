import { RouterProvider } from "react-router-dom";
import PrivateRouting from "./shared/PrivateRouting";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <RouterProvider router={PrivateRouting} />
      <Toaster />
    </div>
  );
};

export default App;
