import React from 'react';
function Todo(props) {
    // this constructs the className attribute for the div below conditional
    // on whether this item's props.item.purchased is true or false
    let classNames = "todo";
    if (props.todo.completed) {
      classNames += " completed";
    }
  
    function updatePurchaseHere() {
      // this calls props.toggleComplete function called from App->ItemList->Item
      // It passes in its own id since that information is needed in the toggleComplete
      // function
      props.toggleComplete(props.todo.id);
    }
  
    return (
      <div className={classNames} onClick={updatePurchaseHere}>
        <p>{props.todo.task}</p>
      </div>
    );
  }

  export default Todo; 