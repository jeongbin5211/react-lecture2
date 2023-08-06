import create from 'zustand';

interface SelectContentState {
    selectContent: number;
    setSelectContent: (select: number) => void;
}

const useStore = create<SelectContentState>((set) => ({
    // create 함수의 매개변수로 콜백함수를 받음
    // 이 콜백함수의 return 객체에 state, setState를 넣는다.
    selectContent: window.localStorage.getItem('select') ?
        Number(window.localStorage.getItem('select')) : 0,
    setSelectContent: (select) => {
        set((state) => ({ ...state, selectContent: select }))
    }
}))

export default useStore
