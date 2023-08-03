import React, { useContext } from 'react'
import { MyContext } from '../contexts/MyContext'

//! 3. Context 사용하기
// 하위 컴포넌트에서 Context를 사용하기 위해서는 useContext 훅을 사용합니다.
// useContext 훅은 매개변수로 Context
const MyComponent = () => {
  const context = useContext(MyContext);

  if(!context) throw new Error("MyComponent must be used within a MyProvider");

  const { value, setValue } = context;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }


  return (
    <div>
      <h1>{value}</h1>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}

export default MyComponent