import React from 'react';
import './App.css';
import TodoHeader from './Components/Header'
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'

var todoItems = [];
todoItems.push({index: 1, value: "Create new Project", done: true});
todoItems.push({index: 2, value: "Create Components", done: false});
todoItems.push({index: 3, value: "Add some code", done: false });

class TodoApp extends React.Component {
    constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.markTodoDone = this.markTodoDone.bind(this);
      this.state = {todoItems: todoItems};
    }
    
    //Adds an item at the start of the todolist
    addItem(todoItem) {
      todoItems.unshift({
        index: todoItems.length+1, 
        value: todoItem.newItemValue, 
        done: false
      });
      this.setState({todoItems: todoItems});
    }

    //removes an item from the todolist
    removeItem (itemIndex) {
      todoItems.splice(itemIndex, 1);
      this.setState({todoItems: todoItems});
    }


    //change the status of a todo, can also toggle 
    markTodoDone(itemIndex) {
      todoItems[itemIndex].done = true;
      // uncomment the next line to toggle the done status
      //todoItems[itemIndex].done = !todoItems[itemIndex].done;
      this.setState({todoItems: todoItems});  
    }


    render() {
      return (
        <div id="main">
          <TodoHeader />
          <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
          <TodoForm addItem={this.addItem} />
        </div>
      );
    }
  }

function App() {
  return (
    <div className="App">
      <TodoApp initItems={todoItems}/>
    </div>
  );
}

export default App;
