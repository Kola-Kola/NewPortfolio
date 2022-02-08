import styled from 'styled-components'

export const HeadingContainer = styled.p`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const TitleLarge = styled.h1`
  font-size: 70px;
  font-weight: bold;
`;

export const TitleSmall = styled.h2`
  font-size: 16px;
  font-weight: lighter;
`;

export const TitleMedium = styled.h3`
  font-size: 25px;
  font-weight: lighter;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;
