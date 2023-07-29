import React from 'react'

interface RenderingProps {
    color: string;
    name?: string;
    isSpecial?: boolean;
}

const Index: React.FC<RenderingProps> = ({color, name='이름없음', isSpecial = false}) => {
  return (
    <>
        <div style={{color}}>{isSpecial ? <b>*</b> : null }안녕하세요 {name}</div>
        <div style={{color}}>{isSpecial && <b>*</b>}안녕하세요 {name}</div>
    </>
    // 삼항연산자: 특정 조건에 따라 보여줘야 하는 내용이 다를 때 사용

    // && 연산자: 단순히 특정 조건이 true이면 보여주고, 그렇지 않다면 숨겨줄 경우에 사용
    
    // boolean 타입의 경우 컴포넌트의 props값을 설정하게 될 때
    // 만약 props의 이름만 작성하고 값 설정을 생략하면 true로 간주
  )
}

export default Index