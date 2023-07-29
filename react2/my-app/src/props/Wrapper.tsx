import React from 'react'

interface WrapperProps {
    // React.ReactNode: React 컴포넌트가 렌더링 될 수 있는 모든 것을 포함하는 타입
    children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({children}) => {

    const style = {
        border: '2px solid black',
        padding: '16px',
    };

    // App.tsx에 Wrapper 컴포넌트의 하위요소로 정의된
    // hello.tsx의 리턴값들이 {children}에 담겨 출력
  return (
    <div style={style}>{children}</div>
  )
}

export default Wrapper