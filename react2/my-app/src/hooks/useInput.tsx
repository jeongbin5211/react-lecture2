import React, { useCallback, useState } from 'react'

// 커스텀 Hooks을 만들 때는 use키워드로 시작하는 파일을 만들고 그 안에 함수를 작성

// form의 초기상태를 받아서 해당 상태를 관리하는 커스텀 훅을 생성
// 입력 컴포넌트 생성 시 사용
// 초기 form의 상태, form의 상태를 변경하는 함수, form의 상태를 초기 상태로 리셋하는 함수를 반환
function UseInput<T>(initialForm: T): [T, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] {

    // useState 훅을 이용해 form 상태를 관리
    const [form, setForm] = useState(initialForm);

    // useCallback 훅을 이용해 form의 상태를 변경하는 함수 생성
    // 이벤트 객체를 매개변수로 받아 해당 이벤트가 발생한 요소의 name과 value값을 사용하여 form의 상태를 변경합니다.
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);

    
    // useCallback 훅을 사용해서 form의 상태를 초기 상태로 리셋하는 함수 생성
    // 매개변수를 받지 않고, form의 상태를 초기상태로 변경합니다.
    const reset = useCallback(() => setForm(initialForm), [initialForm])
    
    // 반환
  return [form, onChange, reset];
}

export default UseInput