import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  SHeader,
  SHeader__location,
  SHeader__logo,
  SHeader__nav,
  SHeader__tab,
  SHeader__exit,
} from "./Header.styled.js";
import { SCenter } from "../../index.styled.js";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { TransactionContext } from "../../context/TransactionProvider.jsx";
import logo from "../../images/logo.svg";

function Header({ connect }) {
  const { logout } = useContext(AuthContext);
  const { setTransactions, setPeriodTransactions, setStart, setEnd } =
    useContext(TransactionContext);
  const location = useLocation();

  const navigate = useNavigate();
  const handleListPage = (e) => {
    e.preventDefault();
    navigate("/list");
  };
  const handleAnalysisPage = (e) => {
    e.preventDefault();
    navigate("/analysis");
  };
  const handleExit = (e) => {
    e.preventDefault();
    logout();
    setTransactions([]);
    setPeriodTransactions([]);
    setStart(null);
    setEnd(null);
    navigate("/login");
  };
  const handleStart = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <SHeader>
      <SCenter>
        <SHeader__location>
          <SHeader__logo>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </SHeader__logo>
          {connect === 2 ? (
            <>
              <SHeader__nav>
                <SHeader__tab
                  $location={location.pathname === "/list"}
                  onClick={handleListPage}
                >
                  Мои расходы
                </SHeader__tab>
                <SHeader__tab
                  $location={location.pathname === "/analysis"}
                  onClick={handleAnalysisPage}
                >
                  Анализ расходов
                </SHeader__tab>
              </SHeader__nav>
              <SHeader__exit onClick={handleExit}>Выйти</SHeader__exit>
            </>
          ) : (
            connect === 1 && (
              <SHeader__exit onClick={handleStart}>
                Перейти на главную
              </SHeader__exit>
            )
          )}
        </SHeader__location>
      </SCenter>
    </SHeader>
  );
}

export default Header;
