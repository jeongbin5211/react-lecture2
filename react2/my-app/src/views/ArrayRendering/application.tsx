import React, {useRef} from 'react'
import UserList from './UserList';

type User = {
    id: number;
    username: string;
    email: string;
}

function App() {

    const users: User[] = [
        {
            id: 1,
            username: 'jeongbin',
            email: 'jongbin@naver.com'
        },
        {
            id: 2,
            username: 'jiyoon',
            email: 'jiyoon@naver.com'
        },
        {
            id: 3,
            username: 'jeongbin',
            email: 'jihyeok@naver.com'
        },
    ];

    // 새로운 사용자를 추가하기 위해 나중에 구현할 배열에 항목을 추가하고, nextId값을 증가시킴
    const nextId = useRef<number>(4);
    const onCreate = () => {
        // 나중에 구현 할 배열에 항목을 추가하는 로직

        nextId.current += 1;
    }
    // UserList컴포넌트를 렌더링하고, users 배열을 users prop으로 전달
  return <UserList users={users} />;
}

export default App