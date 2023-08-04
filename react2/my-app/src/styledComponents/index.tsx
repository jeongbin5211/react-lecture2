import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Execute from '../views/Array/Execute';

//! 스타일 컴포넌트

// styled-components 설치 : npm install styled-components
// TypeScript에서 스타일 컴포넌트 정의 설치: npm install @types/styled-components

//? 스타일 컴포넌트 기본 사용법

interface ButtonProps {
  primary?: boolean;
}

// 1. 스타일링 된 컴포넌트를 만들어서 사용
const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? 'bule' : 'red')};
  color: white;
`;

// 2. Props를 사용한 동적 스타일링
// ${props => props.primary ? 'blue' : 'red'};

// 3. Global Styles 적용: 전역 스타일 적용
// - 태그에 직접 적용하지 않습니다.
// - GlobalStyle 안에 직접 태그부터 입력

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// 4. 스타일 컴포넌트 확장
// TomatoButton과 StyledButton은 같은 스타일이지만 배경색만 다름.
const TomaToButton = styled(StyledButton)`
  background-color: tomato;
`;

// 5. Themeing: 스타일 컴포넌트에서 테마 적용
const theme = {
  theme: 'mediumseagreen',
};

export default function index() {
  return (
    <>
      {/* 전역 스타일을 앱에 적용: 주 컴포넌트 (일반적으로 App.tsx)에 해당 전역 스타일 컴포넌트를 추가 */}
      <GlobalStyle />
      <StyledButton>버튼 클릭</StyledButton>
      <StyledButton primary>동적 버튼 클릭</StyledButton>
      <TomaToButton>토마토 버튼 클릭</TomaToButton>
      <ThemeProvider theme={theme}>
        <Execute />
      </ThemeProvider>
    </>
  );
}
