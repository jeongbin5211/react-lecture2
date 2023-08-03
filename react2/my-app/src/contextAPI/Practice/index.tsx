import React from 'react'
import AuthProvider from './provider/AuthProvider'
import LoginPage from './view/LoginPage'

export default function Index() {
  return (
    <AuthProvider>
        <LoginPage />
    </AuthProvider>
  )
}
