import React, { usestate, useEffect, useReducer } from 'react';
import TodoData from './data';
import TodoCard from './todoCard';

const TodoList = (props) => {
    const [todos, setTodos] = usestate(TodoData);

    return(
        <div className='list-container'>
            {
                todos.map(el => <TodoCard item={el.item} isCompleted={el.completed} />)
            }

        </div>
    )
}



export default TodoList;