import React, { useRef } from 'react'

// 컴포넌트: 리액트를 구성하는 요소

interface ImageProps {
    src: string;
    alt: string;
}

function Image({src, alt}: ImageProps) {

    const myRef = useRef();

    if (!myRef.current /* myRef에 아무것도 없다면 */) {
        // myRef.current = {undefined}
    }

    return (
        <>
            <div>안녕하세요 component01 컴포넌트 입니다.</div>
            <img src={src} alt={alt} />
        </>
    )
}

//! React의 구성 요소는 일반 JS함수이지만, 해당 이름은 대문자로 시작해야 합니다!
// 구성요소가 하나일때 return ()소괄호 제외하기
const Index = () => {
    // 구성요소가 2개 이상일 때 return문의 ()소괄호를 생략할 경우 그 다음 줄의 모든 코드는 return시 무시됩니다.
  return (
    <>
        <Image src="react2\my-app\src\assets\images\news01.jpg" alt="강아지 사진" />
    </>
  )
}

// const Index2 = () => {
//     return <div>안녕하세요 component01 컴포넌트 입니다.</div>
// }

export default Index