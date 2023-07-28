import React, { Suspense } from "react";
import Layout from "./shared/Layout";

const App = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Layout />
      </Suspense>
    </div>
  );
};

export default App;
