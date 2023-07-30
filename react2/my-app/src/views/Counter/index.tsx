import React, { useReducer, useState } from 'react'

type Information = {
    name: string,
    dexcription: string,
};

type Action = { type: 'INCREASE'} | { type: 'DECREASE'};

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('unhandled action');
  }
}


function Counter() {

    //! useState를 사용한 상태관리
    // const [count, setCount] = useState<number>(0); // 여기서 타입 생략 가능(리액트에선 타입을 유추해서)
    // const onIncrease = () => setCount(count + 1);
    // const onDecrease = () => setCount(count - 1);

    //! useReducer를 사용한 상태관리
    const [count, dispatch] = useReducer(reducer, 0);
    // dispatch: 상태와 상태를 변경하는 함수
    // useReducer의 첫번째 매개변수는 reducer 함수를 받고
    // useReducer의 두번째 매개변수는 초기 상태
    const onIncrease = () => dispatch({type: 'INCREASE'});
    const onDecrease = () => dispatch({type: 'DECREASE'});

    const [info, setInfo] = useState<Information | null>(null); // null값이 들어갈 수 있는 경우 무조건 제네릭에 타입 지정을 해줘야함
  return (
    <>
        <h1>{count}</h1>
        <div>
            <button onClick={onIncrease}> + 1</button>
            <button onClick={onDecrease}>- 1</button>
        </div>
    </>
  )

}

export default Counter