import { RouterProvider } from "react-router-dom";
import PrivateRouting from "./shared/PrivateRouting";

const App = () => {
  return (
    <div>
      <RouterProvider router={PrivateRouting} />
    </div>
  );
};

export default App;
