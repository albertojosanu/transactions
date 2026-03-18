import styled from "styled-components";

export const SCalendar__ttl = styled.h2`
  padding: 32px 32px 24px;
  font-size: 24px;
`;

export const SCalendar__daysNames = styled.div`
  height: 27px;
  padding: 0px 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #999999;
`;

export const SCalendar__scrolled = styled.div`
  height: 385px;
  margin-top: 24px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
`;

export const SCalendar__block = styled.div`
  padding: 0px 32px;
`;

export const SCalendar__month = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 12px;
`;

export const SCalendar__cells = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.9%;
  padding-bottom: 24px;
`;

export const SCalendar__cell = styled.div`
  visibility: ${({ $exist }) => !$exist && "hidden"};
  flex-basis: 12.5%;
  //width: 40px;
  height: 40px;
  text-align: center;
  align-content: center;
  background-color: #f4f5f6;
  border-radius: 50%;
  cursor: pointer;

  font-weight: ${({ $current }) => $current && 800};
  color: ${({ $weekend }) => $weekend && "#5d646b"};
  ${({ $activeDay }) =>
    $activeDay && {
      backgroundColor: "#F1EBFD",
      color: "#7334EA",
    }};

  &:hover {
    ${({ $activeDay }) =>
      !$activeDay && {
        backgroundColor: "#eaeef6",
      }}
    font-weight: 800;
  }
`;
