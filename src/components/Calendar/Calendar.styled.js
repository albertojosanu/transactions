import styled from "styled-components";

export const SCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  .date-create {
    display: none;
    margin-bottom: 7px;
  }

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const STemplate = styled.div`
  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const SCalendar__ttl = styled(STemplate)`
  margin-bottom: 14px;
  padding: 0 7px;
`;

export const SCalendar__nav = styled(STemplate)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const SCalendar__period = styled(STemplate)`
  padding: 0 7px;
`;

export const SSubttl = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const SCalendar__block = styled.div`
  display: block;
`;

export const SCalendar__month = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const SNav__actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SNav__action = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
  }
`;

export const SCalendar__content = styled.div`
  margin-bottom: 12px;
`;

export const SCalendar__daysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const SCalendar__dayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const SCalendar__cells = styled.div`
  width: 182px;
  height: 146px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const SCalendar__cell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const S_otherMonth = styled.div`
  opacity: 0;
`;

export const S_cellDay = styled.div`
  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const S_current = styled.div`
  font-weight: 800;
`;

export const S_weekend = styled.div`
  color: #5d646b;
`;

export const SCalendar__p = styled.div`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  span {
    color: #000000;
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const SDateEnd = styled.p``;

export const S_activeDay = styled.div`
  background-color: #94a6be;
  color: #ffffff;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SDateControl = styled.span`
  font-weight: 800;
`;

export const SHidden = styled.span`
  display: none;
`;
