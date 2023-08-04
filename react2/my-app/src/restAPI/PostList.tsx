// HTTP 프로토콜

// HyperText Transfer Protocol
// 클라이언트-서버 모델: 클라이언트가 HTTP 요청(Request)을 서버에 보내고, 서버는 이 요청에 대한 결과를 HTTP 응답(Response)으로 전달합니다.

//? HTTP 메소드
// 1. GET: 특정 리소스의 표현을 요청
// 2. POST: 특정 리소스에 엔터티를 제출
// 3. PUT: 특정 리소스의 업데이트
// 4. DELETE: 특정 리소스의 삭제

//! REST API

//? REpresentational State Transfer
// : 클라이언트와 서버 간의 통신을 간단하고 표준화된 방법으로 처리

import React, { useEffect, useState } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostList() {
  // posts라는 상태 변수와 setPosts라는 상태 변경 함수를 정의
  const [posts, setPosts] = useState<Post[]>([]);

  // useEffect훅을 사용해 컴포넌트가 렌더링 될 때의 종속성인 빈 배열이 변결될 때 마다 실행되는 코드 작성
  // -fetch 함수 사용

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  });

  return (
    <div>
      {/* posts 상태변수를 map() 사용해서 각각의 변수에 값이 전달되도록 작성 */}
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
