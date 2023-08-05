import axios from 'axios';
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
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      });
    // 반환되는 Promise를 처리하기 위해 .then을 사용
    // 응답에서 데이터를 추출하여 setPosts함수를 사용해 posts 상태변수를 업데이트
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
