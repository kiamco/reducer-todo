import React from 'react';

const TodoCart = (props) => {
    return(
        <div className='card-container'>
            <h1>{props.item}</h1>
        </div>
    )
}

export default TodoCart;