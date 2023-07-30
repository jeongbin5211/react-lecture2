import React, { FC, useEffect } from 'react'

type UserProps = {
  user: { 
    id: number; 
    username: string; 
    email: string;
    active: boolean;
  };
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const User: FC<UserProps> = ({ user, onRemove, onToggle }) => {

  // useEffect 사용 시, 첫 번째 파라미터에는 함수가 들어가고 두 번째 파라미터에는 의존값이 들어있는 배열, deps 를 넣는다.
  // deps 배열을 빈 배열로 작성 시, 컴포넌트가 처음 나타날 때만 useEffect에 등록한 함수가 호출

  // deps 파라미터 추가 입력
  // useEffect(() => {
  //   console.log("컴포넌트가 화면에 나타남.");
  //   return () => { // 함수 반환(deps가 비어있는 경우 컴포넌트가 사라질 때 해당 함수를 호출)
  //     console.log("컴포넌트가 화면에서 사라짐.");
  //   }
  // }, [user]);

  useEffect(() => {
    console.log(user);
  });

  return (
    <>
      <b style={{ cursor: "pointer", color: user.active ? "blue" : "red" }} onClick={() => onToggle(user.id)}>{user.username}</b>{" "}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button><br />
    </>
  );
}

type UserListProps = {
  users: Array<{
    id: number,
    username: string,
    email: string,
    active: boolean,
  }>;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const UserList: FC<UserListProps> = ({ users, onRemove, onToggle }) => {
  return (
    <>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </>
  )
}

export default React.memo(UserList, (prevProps, nextProps) =>
prevProps.users === nextProps.users)