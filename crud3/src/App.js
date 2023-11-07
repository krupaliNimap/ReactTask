import { RouterProvider } from "react-router-dom";
import PrivateRouting from "./shared/PrivateRouting";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./components/redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={PrivateRouting} />
        <Toaster />
      </Provider>
    </>
  );
};

export default App;
