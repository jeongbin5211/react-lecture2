import React from 'react'

// props는 리액트 컴포넌트가 부모로부터 받는 데이터를 의미
// 이들은 함수의 매개변수처럼 작용함
// 컴포넌트의 속성을 설정하는데 사용됨
//! props의 경우 읽기 전용(read-only)이며 이를 imutable(변할 수 없는)하다 라고 한다.

// 컴포넌트가 받을 props의 타입을 정의
type Props = {
    name: string,
}

// props를 사용하는 자식 컴포넌트를 정의
const Welcome: React.FC<Props> = (props: Props) => {
    return <h1>Hello, {props.name}</h1>;
    // props내부의 값을 조회할 때 마다 props.을 입력
    // 이를 비구조화 할당
}


// 부모 컴포넌트에서 자식 컴포넌트를 사용하고, props를 통해 데이터를 전달
const prop02:React.FC<Props> = (props: Props) => {
  return <Welcome name="jeongbin" />
}

// 여기서 단방향 데이터 흐름을 확인함
export default prop02