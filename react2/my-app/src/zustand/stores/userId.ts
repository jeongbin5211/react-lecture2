// Id를 메인 페이지에서 입력할 경우
// 다른 모든 페이지에서 적용이 되도록 관리

// 1. 아이디를 저장하는 zustand 객체 생성
// 2. ID를 입력하는 페이지 구성
// 3. 다른 페이지에서 입력한 ID 적용을 확인

import create from 'zustand';

interface Id {
    id: string;
    setId: (Id: string) => void;
}

const IdStore = create<Id>((set) => ({
    id: 'id',
    setId: (id) => {
        // id(속성, property): id(파라미터, 현재값)
        set((state) => ({id: id}))
    }
    // setId: (by) => {
    //     set((state) => ({ id: by}))
    // }
}))

export default IdStore