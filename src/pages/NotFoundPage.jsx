import NotFound from "../components/NotFound/NotFound.jsx";
import Header from "../components/Header/Header.jsx";
import { SWrapper } from "../index.styled.js";

const NotFoundPage = () => {
  return (
    <>
      <SWrapper>
        <Header connect={false} />
        <NotFound />
      </SWrapper>
    </>
  );
};

export default NotFoundPage;
