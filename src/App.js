import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
//import TodoList from './components/TodoComponents/TodoList';


const Test = 
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      toDo: Test,
      toDoElements: {
        task: '',
        id: '',
        completed: '',
      }
    }
}

render() {
  return ( 
      <div>
        {this.state.toDo.map(x => {return <Todo todo={x} key={this.state.task}/>})}
        <div>
          <TodoForm todoform={this.state.toDoElements}/> 
        </div>
      </div>
    );
  }
};

export default App;
