import React from 'react'

type GreetingProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 의미
} 

// 화살표 함수
// 매겨변수 설정

const Greeting/* : React.FC를 넣으면 디폴트값을 넣어줘도 안썼다고 오류남 */ = ({name, mark, optional, onClick}: GreetingProps ) => {
    const handleClick = () => onClick(name);

  return (
  <div>
    Hello, {name} {mark}
    {optional && <p>{optional}</p>}
    <div>
        <button onClick={handleClick}>버튼클릭</button>
    </div>
  </div>
  ) 
}

Greeting.defaultProps = {
    mark: '!'
}

export default Greeting

// Hello, Jeongbin