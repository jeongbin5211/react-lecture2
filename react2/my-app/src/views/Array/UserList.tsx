import React, { FC } from 'react'

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

export default UserList