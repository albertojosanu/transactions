import styled from "styled-components";

export const SLoad = styled.div`
  font-size: 28px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const SMain = styled.main`
  width: 100%;
  background-color: #f1f1f1;
`;

export const SMain__block = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const SMain__content = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const SMain__description = styled.div`
  padding-top: 10px;
  font-size: 28px;
  color: red;
  width: 100%;
  height: 30px;
`;