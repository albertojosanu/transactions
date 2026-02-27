import { useEffect, useContext } from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import {
  SMain,
  SMain__block,
  SMain__content,
  SMain__description,
} from "./Main.styled.js";
import { GlobalStyle, SContainer } from "../../index.styled.js";
import { TransactionContext } from "../../context/TransactionProvider.jsx";

function Main() {
  const location = useLocation();

  const navigate = useNavigate();

  const { loading, updateTransactions } = useContext(TransactionContext);

  useEffect(() => {
    updateTransactions();
    location.pathname === "/" && navigate("/list");
  }, [updateTransactions]);

  return (
    !loading && (
      <>
        <GlobalStyle />
        <SMain>
          <SContainer>
            <SMain__block />
          </SContainer>
        </SMain>
      </>
    )
  );
}

export default Main;
