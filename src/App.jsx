// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import AuthProvider from "./context/AuthProvider.jsx";
import TransactionProvider from "./context/TransactionProvider.jsx";

function App() {
  // const [count, setCount] = useState(0);
  function shouldForwardProp(propName, target) {
    if (typeof target === "string") {
      return isPropValid(propName);
    }
  }

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <AuthProvider>
        <TransactionProvider>
          <AppRoutes />
        </TransactionProvider>
      </AuthProvider>
    </StyleSheetManager>

    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Start, 1</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
