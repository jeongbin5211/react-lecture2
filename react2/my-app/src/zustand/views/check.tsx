import React from 'react';
import IdStore from '../stores/userId';

export default function Check() {
  const { id } = IdStore();
  return (
    <>
      <div>
        <h1>zustand로 상태관리 된 id : {id}</h1>
      </div>
    </>
  );
}
