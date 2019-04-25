import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "./components/TodoComponents/Todo.css"

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
    };
}
handleChanges = event => {
  console.log(event.target.task);
  this.setState({
    toDoElements: {
      ... this.state.toDo,
      [event.target.name]: event.target.value
    }
  })
}

addTask = event => {
 event.preventDefault();
 this.setState({
   toDo: [...this.state.toDo, this.state.toDoElements],
   toDoElements: {
    task: '',
    id: '',
    completed: '',
   }
 });
};

removeCompleted = () => {
  this.setState({
    toDo: this.state.toDo.filter(todo => !todo.completed)
  });
};

toggleComplete = id => {
  this.setState({
    toDo: this.state.toDo.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed } : todo
      )
  })
}

render() {
  return ( 
      <div>
        <section>
          <TodoList toDo={this.state.toDo} toggleComplete={this.toggleComplete} />
        </section>
        <section>
          <TodoForm todoForm={this.state.toDoElements} handleChanges= {this.handleChanges} addTask={this.addTask}/>
        </section>
        <button onClick={this.removeCompleted}>Clear</button>
      </div>
    );
  }
};

export default App;
