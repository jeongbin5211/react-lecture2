import React from 'react';
import { useNavigate } from 'react-router-dom';
import IdStore from '../stores/userId';
// ID를 입력하는 페이지 구성

export default function Index() {
  // useNavigate 훅을 사용해서 navigate 함수를 가져옴.
  // 다른 경로로 이동 가능
  const navigate = useNavigate();

  // userId(IdStore) 스토어에서 id와 setId값을 가져옴.
  // id는 현재 설정된 ID값
  // setId는 이 값을 변경하는 함수
  const { id, setId } = IdStore();

  // onSubmit 함수
  // : /check 경로로 이동하도록 지정
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/zustandCheck`);
  };

  // onChange 함수
  // : input의 값이 변경될 때 호출되는 함수
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          autoComplete="off"
          onChange={onChange}
          placeholder="Enter ID"
          id="nickname"
        />
        <button disabled={!id.length}>Enter</button>
      </form>
    </>
  );
}
