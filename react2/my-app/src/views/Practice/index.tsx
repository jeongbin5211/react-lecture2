import React, { useState, useEffect } from 'react'

type Todo = {
    text: string;
    isCompleted: boolean;
}

const Index: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todoText, setTodoText] = useState('');

    // 로컬 스토리지에서 Todo 목록을 가져옵니다.
    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    // Todo가 변경될 때 마다 로컬 스토리지에 저장
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = () => {
        if (todoText) {
            setTodos([...todos, {text: todoText, isCompleted: false}])
            // ...todos는 나머지를 다 불러온것이고 ,{}는 새로운 객체형식으로 배열을 추가한것
            setTodoText('');

            //! ...스프레드의 이해 예시
            // int[] nums = [1, 2, 3, 4, 5];
            // nums = [1, 2, [...nums]]
            // int[] newArray = [...nums, [6, 7]];
            // [1, 2, 3, 4, 5, 6, 7]

        }
    }

    const handleToggleTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    }

  return (
    <div>
        <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
        {todos.map((todo, index) => {
            // map()함수 사용시 일반적으로 매핑하고 매핑된 결과를 반환하여야 합니다.
            return <div key={index}>
                <input type="checkbox" checked={todo.isCompleted} onChange={() => handleToggleTodo(index)} />
                <span>{todo.text}</span>
            </div>
        })}
        
    </div>
  )
}

export default Index


