import React from 'react'
import useForm from './useForm'

// useForm 커스텀 훅 생성
// : 상태와 상태 변경 함수를 가져옴.
// : useForm훅은 초기상태(initialState)를 인자로 받고 value와 handleChange함수를 반환합니다.

// values의 상태를 useState로 생성
// : handleChange 함수를 정의
// - 입력 요소의 변경 이벤트가 발생할때마다 호출됨
// - 이벤트 객체에서 이름과 값을 가져와서 values 상태를 업데이트함


// handleSubmit함수는 폼이 제출될 때 호출되는 콜백함수
// : 이벤트의 기본 동작을 취소하고 현재 입력된 값(values)를 콘솔에 출력

// <form>요소를 렌더링하고, onSubmit 이벤트에 handleSubmit 함수를 연결
// <input> 요소들은 각각 firstName과 lastName 값을 values에서 가져와서 표시하고,
// handleChange 함수를 이벤트 핸들러로 등록합니다.
function Index() {
  const { values, handleChange } = useForm({ firstName: '', lastName: ''});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  }
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                FirstName:
                <input 
                type="text" 
                name='firstName' 
                value={values.firstName} 
                onChange={handleChange} />
            </label>
            <br />
            <label>
                LastName:
                <input 
                type="text" 
                name='lastName' 
                value={values.lastName} 
                onChange={handleChange} />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Index