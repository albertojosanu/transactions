import styled from "styled-components";

export const SHeader = styled.header`
  background-color: #ffffff;
`;

export const SHeader__location = styled.header`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SHeader__logo = styled.div`
  img {
    height: 19px;
  }
`;

export const SHeader__nav = styled.nav`
  display: flex;
  gap: 48px;
`;

export const SHeader__tab = styled.a`
  font-size: 14px;
  ${({ $location }) =>
    $location && {
      color: "#7334EA",
      fontWeight: "600",
      textDecoration: "underline",
    }};

  &:hover {
    color: #7334ea;
    font-weight: 600;
  }
`;

export const SHeader__exit = styled.a`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    color: #7334ea;
  }
`;
