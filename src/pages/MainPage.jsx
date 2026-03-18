import { Outlet } from "react-router-dom";
import Main from "../components/Main/Main.jsx";
import Header from "../components/Header/Header.jsx";
import { SWrapper, SCenter } from "../index.styled.js";

const MainPage = () => {
  return (
    <>
      <SWrapper>
        <Header connect={2} />
        <SCenter>
          <Main />
          <Outlet />
        </SCenter>
      </SWrapper>
    </>
  );
};

export default MainPage;
