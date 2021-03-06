// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = (props) => {
    return (
        <section>
            {props.toDo.map(todo => {
                return <Todo todo={todo} key={todo.id} toggleComplete={props.toggleComplete}/>
            })}
        </section>
    )
}

export default TodoList 