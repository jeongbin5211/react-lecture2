import React, { ChangeEvent ,useState } from 'react'

const InputSample = () => {

    const [text, setText] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        // ChangeEvent: 입력 요소의 변경 이벤트를 처리하기 위해서 사용
        // HTMLInputElement: 웹 페이지에서 입력을 받는 요소 중 하나
        setText(e.target.value);
        // input에 onChange라는 이벤트 사용
        // 이벤트 객체 e를 매개변수로 받아와서 사용
        // 이 객체의 e.target은 이벤트가 발생한 DOM인 input DOM을 가르킴
        // e.target.value는 이 DOM의 value값입니다. (input에 입력한 값)

        
    }

    const onReset = () => {
        setText('');
    }

  return (
    <div>
        <input onChange={onChange} value={text} type="text" placeholder='이름'/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: {text}</b>   
        </div>
    </div>
  )
}

export default InputSample