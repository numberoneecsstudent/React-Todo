import React from 'react'


const TodoForm = props => {
    return (
    <form onSubmit={props.addTask}>
        <input placeholder="add task here"
        value={props.todoForm.task}
        onChange={props.handleChanges}
        name ="task"/> 
        <button>Add Todo</button>
        
    </form>

    )
}

export default TodoForm;