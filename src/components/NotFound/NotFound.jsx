import { SNotFound } from "./NotFound.styled.js";
import { GlobalStyle, SContainer } from "../../index.styled.js";

const NotFoundPage = () => {
  return (
    <>
      <GlobalStyle />
      <SContainer>
        <SNotFound>404 Страница не найдена</SNotFound>
      </SContainer>
    </>
  );
};

export default NotFoundPage;