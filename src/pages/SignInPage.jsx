import SignIn from "../components/SignIn/SignIn.jsx";
import Header from "../components/Header/Header.jsx";
import { SWrapper } from "../index.styled.js";

const SignInPage = () => {
  return (
    <SWrapper>
      <Header connect={0} />
      <SignIn />
    </SWrapper>
  );
};

export default SignInPage;
