import styled from "styled-components";

export const STable__ttl = styled.h2`
  padding: 32px 32px;
  font-size: 24px;
`;

export const STable__content = styled.table`
  table-layout: fixed;
  //border-collapse: collapse;
  //border-spacing: 32px 14px;
  width: 100%;
`;

export const STable__scrolled = styled.div`
  height: 465px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
`;

export const STable__head = styled(STable__content)`
  color: #999999;
  border-spacing: 32px 0px;
  /* td {
  border-bottom: 0.5px solid #999999;} */
  padding-bottom: 24px;
`;

export const STable__body = styled(STable__content)`
  border-spacing: 32px 14px;
  margin: -14px 0px;
`;

export const STable__column1 = styled.td`
  width: 141px;
`;

export const STable__column2 = styled.td`
  width: 158px;
`;
