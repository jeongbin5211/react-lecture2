import React from 'react'

//! Props의 정의
// 함수형 컴포넌트에서 props라는 매개변수를 받아서 React 요소를 반환
// props는 properties의 줄임말이며 컴포넌트에서 부모 컴포넌트로부터 받는 데이터

//! Props 타입 정의
type MyComponentProps = {
    name: string,
    age: number,
    isActive: boolean;
}

const prop01: React.FC<MyComponentProps> = ({ name, age, isActive }) => {
  return (
    <>
        <div>{name}</div>
        <div>{age}</div>
        <div>{isActive ? "Active" : "Inactive"}</div>
    </>
  )
}

export default prop01