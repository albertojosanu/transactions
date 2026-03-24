import styled from "styled-components";

export const SNewCost__ttl = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`;

export const SNewCost__label = styled.label`
  display: inline;
  font-size: 16px;
  font-weight: 600;
`;

export const SNewCost__wrapper = styled.div`
  width: 100%;
  border-radius: 6px;
  border: ${({ $error, $validate }) =>
    "0.5px solid " + ($error ? "#F25050" : $validate ? "#7334EA" : "#999999")};
  padding: 12px;
  background-color: ${({ $error, $validate }) =>
    $error ? "#FFEBEB" : $validate && "#F1EBFD"};
  margin: 16px 0px 24px;
`;

export const SNewCost__input = styled.input`
  width: 100%;
  background-color: inherit;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const SNewCost__star = styled.span`
  color: #f25050;
`;

export const SNewCost__btnEnter = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ $error }) => ($error ? "#999999" : "#7334EA")};
  pointer-events: ${({ $error }) => ($error ? "none" : "auto")};
  border-radius: 6px;
  border: none;
  color: #ffffff;
`;

export const SNewCost__categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 16px 0px 24px;
`;

export const SNewCost__category = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 20px;
  height: 31px;
  border-radius: 30px;
  background-color: ${({ $active }) => ($active ? "#F1EBFD" : "#F4F5F6")};
  color: ${({ $active }) => $active && "#7334EA"};
  cursor: pointer;
`;

export const SImg = styled.img`
  height: 14px;
`;
