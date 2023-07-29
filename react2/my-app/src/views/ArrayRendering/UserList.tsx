import React from 'react'


type UserProps = {
    // user속성이 User타입인 객체를 갖는 타입
    user: {
        id: number;
        username: string;
        email: string;
    }       
}

type UserListProps = {
    // users 속성이 UserProps의 user배열인 타입
    users: UserProps['user'][];
}

// 함수형 컴포넌트
// user객체의 정보를 출력하는 컴포넌트, username과 email을 화면에 렌더링합니다.
function User( {user}: UserProps ) {
    return (
        <div>
            {user.username}, {user.email}
        </div>
    )
}



// 함수형 컴포넌트
// users배열을 순회(map)하면서 User컴포넌트를 렌더링
// 각각의 User컴포넌트에는 user객체와 고유한 key(prop)값이 전달
function UserList ( { users}: UserListProps) {

  return (
    <>
        <div>
            {/* user객체를 User 컴포넌트에 props로 전달
                이 때, 각 User 컴포넌트에 고유한 key값으로 user.id를 전달
            */}
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>   
    </>
  )
}

export default UserList