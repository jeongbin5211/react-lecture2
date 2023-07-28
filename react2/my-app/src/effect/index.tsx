import React, { useState, useEffect } from 'react'

// 리액트 컴포넌트의 생명주기
// 마운트(Mounting): 컴포넌트가 DOM에 처음으로 렌더링 되는 단계
// 업데이트(Updating): props 또는 state가 변경될 때 컴포넌트가 다시 렌더링되는 단계
// 언마운트(Unmounting): 컴포넌트가 DOM에서 제거되는 단계

// useEffect 훅
// DOM조작, 데이터 가져오기, 구독 설정 등과 같은 동작을 할 때 사용합니다
// 두개의 인수를 받는다.(사이드 이펙트를 수행하는 함수, 해당 함수를 다시 호출해야 하는 경우 정의하는 의존성 배열)

// useEffect의 작동 방식
// useEffect( () => {}, []);
// useEffect( () => {
//      부수 효과를 수행하는 로직
// }, []); 
// 의존성 배열: 선택 사항
// 의존성 배열은 특정 상태나 props를 포함시키면, 그 값들이 변경될 때 마다 useEffect 내의 부수 효과를 실행합니다.
// 빈 배열의 경우 부수 효과가 한 번만 수행됩니다.(컴포넌트가 마운팅 될 때)


const Index: React.FC = () => {

    // 특정 값에 대한 업데이트 감지합니다.
    // const [count, setCount] = useState<number>(0);

    // useEffect의 첫 번째 인수로 전달된 함수는 컴포넌트가 마운트되거나 업데이트 될 때 호출됨.
    // useEffect(() => {
    //     console.log('This runs after component did mount or update');

    //     return () => {
    //         console.log('This runs when component will unmount.')
    //     }
    // }, [count]); // 두번째 인수로 전달된 의존성 배열에 값을 넣으면, 그 값이 변경될 때 마다 첫번째 인수로 전달된 함수가 호출됨

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
        console.log(`Count has changed to ${count}`)
        
        return () => {
            // side effect : 처음 렌더링 될 때 한번 실행되고 그 뒤는 의존성 배열이 변경될때마다 실행됩니다.
            document.title = 'React App';
            console.log("Component unmounted"); // 언마운트 시 실행될 코드
            //언마운트되는 상황
            // 라우팅이 변결될때 : 다른페이지로 이동 or 라우터에서 현재 컴포넌트가 언파운트되어 새로운 컴포넌트가 마운트 될 경우
            // 조건부 렌더링: 컴포넌트가 false가 되어 렌더링 되지 않을 경우
            // 상위 컴포넌트의 업데이트
            // 수동으로 컴포넌트를 제거할때 : 해당 DOM을 제거
        }
    }, [count]); // 의존성 배열에 count 변수를 넣음.
    // 의존성 배열
    // : 의존성 배열에 들어가는 요소들은 'useEffect'가 수행될 조건을 결정
    // 의존성 배열에 나열된 모든 값이 변경될 때 마다 side effect가 실행됨

    //? 의존성 배열에 빈 배열[]을 넣는 경우
    //  컴포넌트가 처음 렌더링 될 때만 side effect가 수행됩니다.

  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default Index