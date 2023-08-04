import React from 'react';
// "primary"라는 Boolean prop을 받는 Button 컴포넌트를 작성
// "primary" prop이 true라면, 버튼의 배경색은 파란색이고 글씨는 흰색
// "primary" prop이 false 또는 없을 경우, 배경색은 회색이고 글씨는 검정색

// 위의 버튼의 기능을 확장하는 버튼을 만들고 글자 속성을 굵게 지정, 글자색은 orange로 지정

interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({
  primary = false,
  children,
  style,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: primary ? 'blue' : 'gray',
    color: primary ? 'white' : 'black',
    fontWeight: 'bold',
    fontSize: '20px',
    ...style, // 추가된 style을 병합
  };

  return <button style={buttonStyle}>{children}</button>;
};

interface ExtendedButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  style?: any;
}

const ExtendedButton: React.FC<ExtendedButtonProps> = ({
  primary = false,
  children,
}) => {
  const extendedButtonStyle = {
    color: 'orange',
    ...Button.defaultProps?.style,
  };

  return (
    <Button primary={primary} style={extendedButtonStyle}>
      <strong>{children}</strong>
    </Button>
  );
};

export default function index() {
  return (
    <div>
      <Button>버튼 클릭</Button>
      <ExtendedButton primary>확장된 버튼</ExtendedButton>
      <Button>
        <span>Custom content</span>
      </Button>
      <ExtendedButton>
        <em>Custom extended button</em>
      </ExtendedButton>
    </div>
  );
}
