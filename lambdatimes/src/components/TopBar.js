import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  `;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
  .top-bar .container {
    width: 1280px;
  }
}
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const SpanLeft = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const SpanCenter = styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:lastchild {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const SpanRight = styled.span`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <MainDiv>
      <Container>
        <ContainerLeft>
          <SpanLeft>TOPICS</SpanLeft><SpanLeft>SEARCH</SpanLeft>
        </ContainerLeft>
        <ContainerCenter>
          <SpanCenter>GENERAL</SpanCenter><SpanCenter>BROWNBAG</SpanCenter><SpanCenter>RANDOM</SpanCenter><SpanCenter>MUSIC</SpanCenter><SpanCenter>ANNOUNCEMENTS</SpanCenter>
        </ContainerCenter>
        <ContainerRight>
          <SpanRight>LOG IN</SpanRight>
        </ContainerRight>
      </Container>
    </MainDiv>
  )
}

export default TopBar;