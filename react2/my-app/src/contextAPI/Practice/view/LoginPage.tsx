import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

export default function LoginPage() {
    const auth = useContext(AuthContext);
  return (
    <div>
        <h1>Login Page</h1>
        <button onClick={auth.logIn}>로그인</button>
        <button onClick={auth.logOut}>로그아웃</button>
        {auth.isLoggedIn && <p>회원이 로그인 하였습니다.</p>}
    </div>
  )
}
