import React, { useState } from 'react'

// State
// 컴포넌트에서 관리되는 데이터, 사용자 상호작용 또는 시간 경과 등에 따라 변경 가능
// 컴포넌트의 State가 변경되면, 컴포넌트는 자동으로 다시 렌더링, UI가 최신 상태를 반영

// State 정의방법
// useState라는 Hook을 사용하여 state를 정의하고 관리
// : state 변수와 해당 변수를 갱신할 수 있는 함수(setState), 두 개의 요소를 가진 배열을 반환합니다.

// const [state, setState] = React.useState<type>(초기값initialState);

// state: 현재 state 값을 나타냄
// setState: 위 state를 갱신하는 함수, 이 함수를 호출하여 state를 갱신하면, 전달된 새로운 값으로 state가 업데이트

// Props의 타입
interface GreetingProps {
    name: string;

}

// State의 타입
// interface CounterState {
//     count: number;
// }
// State 사용 예시
const Index: React.FC<GreetingProps> = () => {
    const [count, setCount] = useState<number>(0)

    const incrementCount = () => {
        setCount( prevCount => prevCount + 1);
    };

    const decrementCount = () => {
        setCount( prevCount => prevCount - 1);
    }

    return (
        <div>
            {/* <p>Hello, {name}</p> */}
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    )
}

export default Index