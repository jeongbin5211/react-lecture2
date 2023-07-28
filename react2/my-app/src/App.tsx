import React from 'react';
import './App.css';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

import Components from './components';
import Prop from './props/prop02';
import State from './state';
import Effect from './effect';

function App() {
  return (
    <>
    <State name='jeongbin' />
    <Effect />
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
        <Route path="/props" element={<Prop name="jiyoon" />} />
      </Routes>
    </>
  );
}

export default App;
