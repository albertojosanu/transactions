import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SHeader,
  SHeader__block,
  SHeader__logo,
  SShow,
  SLight,
  SDark,
  SHeader__nav,
  SHeader__btnMainNew,
  SHeader__user,
  SHeader__popUserSet,
  SPopUserSet__name,
  SPopUserSet__mail,
  SPopUserSet__theme,
  SCheckbox,
} from "./Header.styled.js";
import { GlobalStyle, SContainer, S_hover03 } from "../../index.styled.js";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { TransactionContext } from "../../context/TransactionProvider.jsx";
import logo from '../../images/logo.svg'

function Header({ connect }) {
  //const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const { setTransactions, setError } = useContext(TransactionContext);
  //const { setDate } = useContext(TransactionContext);

  const navigate = useNavigate();
  const handleListPage = (e) => {
    e.preventDefault();
    //setDate(new Date());
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
    //setError("");
    navigate("/login");
  };
  const handleStart = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <GlobalStyle />
      <SHeader>
        <SContainer>
          <SHeader__logo>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </SHeader__logo>
          {connect ? (
            <SHeader__nav>
              <SHeader__btnMainNew
                as="button"
                id="btnMainNew"
                onClick={handleListPage}
              >
                Мои расходы
              </SHeader__btnMainNew>
              <SHeader__btnMainNew
                as="button"
                id="btnMainNew"
                onClick={handleAnalysisPage}
              >
                Анализ расходов
              </SHeader__btnMainNew>
              <SHeader__user onClick={handleExit}>Выйти</SHeader__user>
            </SHeader__nav>
          ) : (
            <SHeader__btnMainNew as="button" onClick={handleStart}>
              Перейти на главную
            </SHeader__btnMainNew>
          )}
        </SContainer>
      </SHeader>
    </>
  );
}

export default Header;
