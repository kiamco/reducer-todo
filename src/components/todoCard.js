import React, { useReducer } from 'react';
import listReducer from '../reducers/listReducer';

const TodoCart = (props) => {
    const [state, dispatch] = useReducer(listReducer, props.items)
    console.log(state);
    return (
        <div>   
        {
            state.map(el => {
                return (
                    <div className={el.completed ? "list-item completed": "list-item"}>
                        <h1 onClick={e => {
                            console.log(e)
                            console.log(el);
                            dispatch({type:"TOGGLE_ITEM", id:el.id});
                        }}>{el.item}</h1>
                    </div>
                );
            })
        }
        </div>
    )
}

export default TodoCart;