import { Outlet } from "react-router-dom";
import Main from "../components/Main/Main.jsx";
import Header from "../components/Header/Header.jsx";
import { SWrapper } from "../index.styled.js";

const MainPage = () => {
  return (
    <>
      <SWrapper>
        <Header connect />
        <Main />
        <Outlet />
      </SWrapper>
    </>
  );
};

export default MainPage;
