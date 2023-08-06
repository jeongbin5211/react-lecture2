import React from 'react';
import useCount from './stores/count';
import useContent from './stores/content';

// 리액트 내장 관리 도구: useState, useContext

// zustand: 독일어로 '상태'를 의미합니다
// - 컴포넌트를 최소한으로 리렌더링
// - 소규모, 경량화된 라이브러리
// - 코드 간결, 사용법이 직관적,

//! Zustand 설치
// npm을 통해 설치
//? npm install zustand

//! Zustand 기능

// 2. 상태 선택

export default function Index() {
  //? Counter 예제
  // useStore 훅을 호출
  const count = useCount((state) => state.count);
  const increase = useCount((state) => state.increase);
  const increaseAsync = useCount((state) => state.increaseAsync);

  //? Content 예제
  // 구조 분해 할당을 통해 state, setState를 가져와서 사용
  const { selectContent, setSelectContent } = useContent();

  const handleClick = (value: number) => {
    console.log(`Selected value: ${value}`);
    setSelectContent(value);
  };
  return (
    <>
      <div>
        <button onClick={increase}>clicked: {count}</button>
        <button onClick={increaseAsync}>clicked: {count}</button>
      </div>
      <div>
        <h1>Selected Content : {selectContent}</h1>
        <button onClick={() => handleClick(1)}>Select 1</button>
        <button onClick={() => handleClick(2)}>Select 2</button>
        <button onClick={() => handleClick(3)}>Select 3</button>
      </div>
    </>
  );
}

// 3. 비동기 작업

// type State = {
//   loading: boolean;
//   data: string | null;
//   fetch: () => Promise<void>;
// };

// const useStore = create<State>((set) => ({
//     loading: false,
//     data: null,
//     fetch: async () => {
//         set({ loading: true });
//         const response = await fetch('/api/data');
//         const data = await response.text();
//         set( { data, loading: false } );
//     }
// }))
