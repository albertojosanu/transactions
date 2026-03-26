import SignUp from "../components/SignUp/SignUp.jsx";
import Header from "../components/Header/Header.jsx";
import { SWrapper } from "../index.styled.js";

const SignUpPage = () => {
  return (
    <SWrapper>
      <Header connect={0} />
      <SignUp />
    </SWrapper>
  );
};

export default SignUpPage;
