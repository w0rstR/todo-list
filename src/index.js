import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import ItemStatusFilter from './components/ItemStatusFilter'
import './index.css'

const App = () => {
  const todoData=[
    {value:'Drink Coffe',important:false,id:1},
    {value:'Drink Tea',important:false,id:1},
    {value:'Have a lunch',important:true,id:1},
    {value:'Drink Pepsi',important:false,id:1}
  ]
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter/>
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App/>,document.getElementById('root'))