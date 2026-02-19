import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage.jsx";
import SignInPage from "../../pages/SignInPage.jsx";
import SignUpPage from "../../pages/SignUpPage.jsx";
import ListPage from "../../pages/ListPage.jsx";
import AnalysisPage from "../../pages/AnalysisPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/list" element={<ListPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;