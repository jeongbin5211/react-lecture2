import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Components from './components';
import Prop from './props/prop02';
import State from './state';
import Effect from './effect';
import Todo from './views/Practice';
import Hello from './props/hello';
import Wrapper from './props/Wrapper';
import Input from './views/Input';
import InputSample2 from './views/Input/InputSample';
import ArrayRender from './views/ArrayRendering/UserList';
import Array from './views/Array/Execute';
import Greeting from './views/Greeting/Greeting';
import Counter from './views/Counter';
import MyForm from './views/MyForm';
import CustomHooks from './hooks';
import CustomHooksPractice from './hooks/Practice';
import ContextApi from './contextAPI';
import ContextApiLogIn from './contextAPI/Practice';
import StyledComponents from './styledComponents';
import StyledComponents2 from './styledComponents/practice';
import FetchAPI from './restAPI/PostList';

function App() {
  const onClick = () => {
    console.log('클릭 동작 실행 성공');
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <State name="jeongbin" />
      <Effect />
      <Todo />
      {/* 
        라우터 설치
        npm install react-router-dom
        npm install --save-dev @types/react-router-dom

        라우트를 여러개 사용 시 반드시 Routes 안에 정의 해야 함
        path속성: URL경로 지정
        element속성: 컴포넌트를 지정합니다.
    */}
      <Routes>
        <Route path="/components" element={<Components />} />
        <Route
          path="/hello"
          element={
            <Wrapper>
              <Hello color="blue" name="jeong bin" />
            </Wrapper>
          }
        />
        <Route path="/array" element={<Array />} />
        <Route path="/props" element={<Prop name="jeongbin" />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<InputSample2 />} />
        <Route
          path="/greeting"
          element={<Greeting name="Jeongbin" onClick={onClick} />}
        />
        <Route path="/customHooks" element={<CustomHooks />} />
        <Route path="/customHooksPractice" element={<CustomHooksPractice />} />
        <Route path="/contextApi" element={<ContextApi />} />
        <Route path="/contextApiLogIn" element={<ContextApiLogIn />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<MyForm onSubmit={onSubmit} />} />
        <Route path="/styledComponents" element={<StyledComponents />} />
        <Route path="/styledComponents2" element={<StyledComponents2 />} />
        <Route path="/fetchAPI" element={<FetchAPI />} />
        {/* <Route path='/arrayRendering' element={<ArrayRender />} /> */}
      </Routes>
    </>
  );
}

export default App;
