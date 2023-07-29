import React, { ChangeEvent, useState, useRef, RefObject } from 'react'

// 특정 DOM을 선택할 때 ref를 사용합니다.
// 함수형 컴포넌트에서 ref 사용 시 useRef라는 Hook함수를 사용합니다.
interface InputState {
    name: string;
    nickname: string;
}

const InputSample3 = () => {

    // useState에서는 문자열이 아니라 객체 형태로 상태를 관리해 주어야 한다.
    const [inputs, setInputs] = useState<InputState>({ name: '', nickname: ''})

    const nameInput = useRef<HTMLInputElement>(null);
    // useRef()를 사용하여 Ref객체를 생성

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값을 추출
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value로 설정합니다.
        });
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        if (nameInput.current) {
        nameInput.current.focus();
        // input에 포커스를 하는 DOM API 호출
        }
    }

  return (
    <div>
      <input
        onChange={onChange}
        value={name}
        name="name"
        type="text"
        placeholder="이름"
        ref={nameInput as RefObject<HTMLInputElement>}
        // 선택하고 싶은 DOM에 ref값으로 설정(.current에 원하는 DOM이 지정)
      />
      <input
        onChange={onChange}
        value={nickname}
        name="nickname"
        type="text"
        placeholder="닉네임"
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b> {name}, {nickname}
      </div>
    </div>
  );
}

export default InputSample3