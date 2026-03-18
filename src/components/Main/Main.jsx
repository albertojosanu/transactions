import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TransactionContext } from "../../context/TransactionProvider.jsx";

function Main() {
  const location = useLocation();

  const navigate = useNavigate();

  const { updateTransactions } = useContext(TransactionContext);

  useEffect(() => {
    updateTransactions();
    location.pathname === "/" && navigate("/list");
  }, [updateTransactions]);

  return <></>;
}

export default Main;
