import { Outlet } from "react-router-dom";
import Main from "../components/Main/Main.jsx";
import Header from "../components/Header/Header.jsx";

const MainPage = () => {
  return (
    <>
        <Header connect/>
        <Main />
        <Outlet />
    </>
  );
};

export default MainPage;