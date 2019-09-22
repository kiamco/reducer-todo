import React, { useState, useEffect, useReducer } from 'react';
import TodoData from './data';
import TodoCard from './todoCard';

const TodoList = (props) => {
    const [todos, setTodos] = useState(TodoData);

    return (
        <div className='list-container'>
            <TodoCard items={TodoData} />
        </div>
    )
}



export default TodoList;