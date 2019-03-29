import React from 'react';
import styled from 'styled-components'



const Div = styled.div `
display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  
 
  @media (min-width: 1280px) {
      width: 100%;
  }

`;
const FirstSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: right;
  margin-right: 25px;
  flex: 1;

`;

const Secondspan = styled.span `
align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
`;

const H1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Header = () => {
  return (
    <Div>
      <FirstSpan>SMARCH 32, 2018</FirstSpan>
      <H1>Lambda Times</H1>
      <Secondspan> 98°</Secondspan>
    </Div>
  )
}

export default Header