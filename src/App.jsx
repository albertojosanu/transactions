import AppRoutes from "./components/AppRoutes/AppRoutes";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import AuthProvider from "./context/AuthProvider.jsx";
import TransactionProvider from "./context/TransactionProvider.jsx";

function App() {
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
  );
}

export default App;
