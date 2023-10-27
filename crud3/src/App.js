import { RouterProvider } from "react-router-dom";
import PrivateRouting from "./shared/PrivateRouting";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./components/redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={PrivateRouting} />
        <Toaster />
      </Provider>
    </div>
  );
};

export default App;
