import styled from "styled-components";

const colors = [
  "#D9B6FF",
  "#FFB53D",
  "#6EE4FE",
  "#B0AEFF",
  "#BCEC30",
  "#FFB9B8",
];

export const SChart__ttl = styled.h2`
  font-size: 24px;
  padding-bottom: 12px;
`;

export const SChart__description = styled.span`
  color: #999999;
`;

export const SChart__description__bold = styled.span`
  font-weight: 600;
`;

export const SChart__group = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding-top: 21px;
`;

export const SChart__visual = styled.div`
  width: 94px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SChart__sum = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  align-content: end;
  height: ${({ $height }) => $height};
`;

export const SChart__bar = styled.div`
  border-radius: 12px;
  height: ${({ $height }) => $height};
  background-color: ${({ $index }) => colors[$index]};
`;

export const SChart__category = styled.div`
  text-align: center;
`;
