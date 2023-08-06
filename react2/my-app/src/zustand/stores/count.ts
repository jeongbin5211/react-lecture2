import { create } from 'zustand';

// 1. 상태 생성
// : create 함수를 사용하여 상태 생성(초기상태 & 액션들을 정의하는 콜백 함수를 인수로 받는다.)

type CountState = {
    count: number;
    increase: () => void;
    increaseAsync: () => Promise<void>;
  };
  
  // useStore라는 이름의 커스텀 훅으로 사용 가능
  const useStore = create<CountState>((set) => ({
    // 초기 상태
    count: 0,
    // 상태를 업데이트하는 메소드를 정의하는 콜백 함수
    // : set함수를 인수로 하는 콜백 함수
    // : set함수 - Zustand의 상태를 업데이트 
    increase: () => set((state) => ({ count: state.count + 1 })),

    //? 비동기 상태 업데이트
    increaseAsync:async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        set((state) => ({ count: state.count + 1}));
    },

    
  }));

  export default useStore;