import React, { useEffect, useState } from 'react';

//! Axios 라이브러리를 이용한 API요청 보내기

// Axios
// : Promise 기반의 HTTP 클라이언트
// : HTTP요청 구현이 간단, 요청과 응답 데이터를 쉽게 변환 가능
// : HTTP 요청을 보낼 때 유용한 설정 옵션을 제공

//? Axios 설치
// npm install axios

// 가져올 데이터의 양식을 타입으로 지정

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostListAxios() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    1 21
  })

  return <div>PostListAxios</div>;
}
