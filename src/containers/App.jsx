import React, { Suspense } from "react";
import Routes from "../routes";

const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </React.Fragment>
  )
}



export default App
