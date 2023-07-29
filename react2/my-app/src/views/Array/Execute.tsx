import React, { ChangeEvent, FC, useRef, useState } from 'react'
import CreateUser from './CreateUser';
import UserList from './UserList';

type User = {
    id: number;
    username: string;
    email: string;
    active: boolean;
}

const Execute: FC = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });

    const { username, email } = inputs;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    // users 상태는 사용자 목록을 관리합니다.
    const [users, setUsers ] = useState<User[]>([
        {
            id: 1,
            username: 'jeongbin',
            email: 'jongbin@naver.com',
            active: true,
        },
        {
            id: 2,
            username: 'jiyoon',
            email: 'jiyoon@naver.com',
            active: false,
        },
        {
            id: 3,
            username: 'jihyeok',
            email: 'jihyeok@naver.com',
            active: false,
        },
    ]);

    // nextId useRef를 사용하여 다음 사용자의 id를 저장합니다.
    const nextId = useRef(4);

    const onCreate = () => {
      const user: User = {
        id: nextId.current,
        username,
        email,
        active: false,
      };

      // concat(): 원래의 users 배열에 user를 추가한 새로운 배열을 반환
      //           원본 배열을 변경하지 않고 새로운 배열을 반환하는 순수 함수
      // 배열에 새 항목을 추가할 때
      // 스프레드 연산자(...)를 사용하거나
      setUsers(users.concat(user));

      setInputs({
        username: "",
        email: "",
      });

      nextId.current += 1;
    }

    const onRemove = (id: number) => {
        // user.id가 매개변수로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
        // user.id가 id인 것을 제거
        setUsers(users.filter(user => user.id !== id));
    }

    const onToggle = (id: number) => {
        setUsers(
            users.map(user =>
                user.id === id ? {...user, active: !user.active} : user)
        )
    }

  return (
    <>
        <CreateUser username={username} email={email} onCreate={onCreate} onChange={onChange} />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  )
}

export default Execute