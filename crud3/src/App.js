import { RouterProvider } from "react-router-dom";
import PrivateRouting from "./shared/PrivateRouting";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import { Suspense } from "react";

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Provider store={store}>
          <RouterProvider router={PrivateRouting} />
          <Toaster />
        </Provider>
      </Suspense>
    </>
  );
};

export default App;
