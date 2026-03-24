import styled from "styled-components";

export const SModal__ttl = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const SModal__formLogin = styled.form`
  div {
    margin-bottom: 12px;
  }
`;

export const SModal__wrapper = styled.div`
  border-radius: 6px;
  border: ${({ $error, $validate }) =>
    "0.5px solid " + ($error ? "#F25050" : $validate ? "#7334EA" : "#999999")};
  padding: 12px;
  background-color: ${({ $error, $validate }) =>
    $error ? "#FFEBEB" : $validate && "#F1EBFD"};
`;

export const SModal__input = styled.input`
  width: 100%;
  background-color: inherit;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #999999;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px
      ${({ $error, $validate }) =>
        $error ? "#FFEBEB" : $validate ? "#F1EBFD" : "#FFFFFF"}
      inset;
  }
`;

export const SModal__btnEnter = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ $error }) => ($error ? "#999999" : "#7334EA")};
  pointer-events: ${({ $error }) => ($error ? "none" : "auto")};
  border-radius: 6px;
  margin: 24px 0px;
  border: none;
  color: #ffffff;
`;

export const SModal__formGroup = styled.div`
  text-align: center;

  p,
  a {
    color: #999999;
    line-height: 150%;
  }

  a {
    text-decoration: underline;
  }
`;

export const SModal__description = styled.div`
  text-align: center;
  color: red;
`;

export const SModal__star = styled.span`
  position: relative;
  left: ${({ $error, $length }) => ($error ? $length + 1 + "ch" : "100%")};
  color: #f25050;
`;
