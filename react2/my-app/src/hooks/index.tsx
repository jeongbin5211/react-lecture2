import React, { useCallback, useMemo, useReducer, useRef } from 'react'
import useInputs from './useInput';
import UserList from '../views/Array/UserList';
import CreateUser from '../views/Array/CreateUser';

interface User {
    id: number;
    username: string;
    email: string;
    active: boolean;
}

// 활성 사용자의active가 true인 수를 세는 함수
function countActiveUsers(users: User[]): number {
    console.log("활성 사용자의 수");
    return users.filter(user => user.active).length;
}

// 초기상태 설정
const initialState = {
    users: [
        {
            id: 1,
            username: "정빈",
            email: "ㅁㄴㅇㄹ@ㅁㄴㅇㄹ",
            active: true,
        },
        {
            id: 2,
            username: "jiyoon",
            email: "jiyoon@naver.com",
            active: true,
        },
        {
            id: 3,
            username: "jihyeok",
            email: "jihyeok@naver.com",
            active: false,
        },
    ]
};

// action의 타입을 정의
type Action = {type: 'CREATE_USER'; user: User} | {type: "TOGGLE_USER"; id: number} | {type: 'REMOVE_USER'; id: number};

// reducer 함수 정의
// : 변화를 일으키는 함수, 두 가지 파라미터를 받아 현재 상태와 전달받은 액션을 참고하여 새로운 상태를 만들어서 반환
function reducer(state: typeof initialState, action: Action) {
    // switch-case문 사용
    // 조건으로 전달받은 액션의 타입을 지정
    // 해당 조건의 리턴으로
    // 'CREATE_USER': users에 현재 상태를 concat메소드를 사용하여 리턴
    // 'TOGGLE_USER': users에 현재 상태의 users를 반복시켜서 user.id와 action.id가 동일하다면 active의 값을 변경하고 동일하지 않다면 그대로 user.id를 반환
    // 'REMOVE_USER': 전체 user에서 user.id와 action.id가 동일하지 않다는 조건을 만족할 경우 filter메소드로 새로운 배열을 생성 후 리턴
    // default: return state;
    switch (action.type) {
        case 'CREATE_USER':
            return {users: state.users.concat(action.user)};
        case 'TOGGLE_USER':
            return {
                users: state.users.map(user => user.id === action.id ? {...user, active: !user.active} : user)
            }
        case 'REMOVE_USER':
            return {
                users: state.users.filter(user => user.id !== action.id)
            }
        default: 
            return state;
    }
}

export default function Index() {

    const [{ username, email}, onChange, reset] = useInputs({
        username: '',
        email: '',
    });
    // useReducer에서 state는 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가리킴.
    // dispatch: 액션을 발생시키는 함수
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);

    const {users} = state;

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
                active: false,
            }
        });
        reset();
        nextId.current += 1;
    }, [username, email, reset]);

    const onToggle = useCallback((id: number) => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        });
    }, []);

    const onRemove = useCallback((id: number) => {
        dispatch({
            type: 'REMOVE_USER',
            id
        });
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
        <CreateUser 
            username={username} 
            email={email} 
            onChange={onChange} 
            onCreate={onCreate} 
        />
        <UserList 
            users={users} 
            onRemove={onRemove} 
            onToggle={onToggle} 
        />
        <div>활성 사용자 수 : {count}</div>
    </>
  )
}
