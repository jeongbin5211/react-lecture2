import React from 'react'
import MyComponent from './components/MyComponent'
import { MyProvider } from './contexts/MyContext'

export default function Index() {
  return (
    <>
        <MyProvider>
            <MyComponent />
        </MyProvider>
    </>
  )
}
