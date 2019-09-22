import React, { useReducer, useEffect } from 'react';
import listReducer from '../reducers/listReducer';

const TodoCart = (props) => {
    const [state, dispatch] = useReducer(listReducer, props.items)

    return (
        <div>   
        {
            state.map(el => {
                return (
                    <div className={el.completed ? "list-item completed": "list-item"}>
                        <h1 onClick={e => dispatch({type:"TOGGLE_ITEM", id:el.id})}>{el.item}</h1>
                    </div>
                );
            })
        }
            <button onClick={e => {
                dispatch({ type: "REMOVE" })}
                } > Remove Completed Items</button>
        </div>
    )
}

export default TodoCart;