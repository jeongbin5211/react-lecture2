import React, { ChangeEvent, useState } from 'react'
// useForm 커스텀 훅 생성
// : 상태와 상태 변경 함수를 가져옴.
// : useForm훅은 초기상태(initialState)를 인자로 받고 value와 handleChange함수를 반환합니다.

// values의 상태를 useState로 생성
// : handleChange 함수를 정의
// - 입력 요소의 변경 이벤트가 발생할때마다 호출됨
// - 이벤트 객체에서 이름과 값을 가져와서 values 상태를 업데이트함
interface FormState {
    [key: string]: string;
}

export default function useForm(initialState: FormState) {
    const [values, setValues] = useState<FormState>(initialState)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

  return { values, handleChange };
}
