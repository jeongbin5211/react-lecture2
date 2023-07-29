import React, { ChangeEvent ,useState } from 'react'

interface InputState {
    name: string;
    nickname: string;
}

const InputSample2 = () => {

    // useState에서는 문자열이 아니라 객체 형태로 상태를 관리해 주어야 한다.
    const [inputs, setInputs] = useState<InputState>({ name: '', nickname: ''})

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
        })
    }

  return (
    <div>
        <input onChange={onChange} value={name} name='name' type="text" placeholder='이름'/>
        <input onChange={onChange} value={nickname} name='nickname' type="text" placeholder='닉네임'/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b> {name}, {nickname} 
        </div>
    </div>
  )
}

export default InputSample2