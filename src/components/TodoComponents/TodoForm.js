import React from 'react'


const TodoForm = event => {
    return (
    <form>
        <input placeholder="add task here"></input> 
        <button>Add Todo</button>
        <button>Clear Completed</button> 
        
    </form>
    )
}

export default TodoForm;