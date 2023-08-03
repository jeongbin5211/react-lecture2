import React, { useState } from 'react'
import { createContext } from 'react';

//! 1. Context 생성
// : createContext 함수를 사용(Context의 초기값을 매개변수로 받음.)

// 상태의 타입을 정의
interface State {
    value: string;
    setValue: (value: string) => void;
}
// createContext. 함수를 사용하여 Context를 생성합니다.
// Context의 초기값을 지정
export const MyContext = createContext<State | undefined>(undefined);

//! 2. Context Provider 생성
// : Context를 사용하려는 컴포넌트들을 감싸는 컴포넌트
// : 이 컴포넌트를 통해 하위 컴포넌트들에게 Context를 제공합니다.

export const MyProvider = ({ children }: {children: React.ReactNode }) => {
    const [value, setValue] = useState("Initial Value");

    return (
        <MyContext.Provider value={{ value, setValue}}>
            {children}
        </MyContext.Provider>
    )
}