import React,{Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';
import ItemAddForm from '../ItemAddForm';

export default class App extends Component{

  maxId=100;
  state={
    // todoData:[
    //   { value: 'Drink Coffee', important: false, id: 1 },
    //   { value: 'Make Awesome App', important: true, id: 2 },
    //   { value: 'Have a lunch', important: false, id: 3 }
    // ]

    todoData:[
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
      
    ],
    term:'',
    filter:'all' // nust be : active,all,done
  }

  createTodoItem(value){
    return{
      value,
      important:false,
      done:false,
      id:this.maxId++
    }
  }

  deleteItem=(id)=>{
    this.setState(({todoData})=>{
      const index = todoData.findIndex((el)=>el.id === id)
      console.log(index)

      // 1 option
      // const before = todoData.slice(0,index)
      // const after = todoData.slice(index+1)
      // const newArray=[...before,...after]
      // 2 option
      const newArray=[...todoData.slice(0,index),...todoData.slice(index+1)]

      return{
        todoData:newArray
      }
    })
  }

  addItem=(text)=>{
    
    const newItem=this.createTodoItem(text)

    this.setState(({todoData})=>{
      const newArray=[...todoData,newItem]
      
      return{
        todoData:newArray
      }
    })    
  }

  toggleProperty(arr,id,propName){
    const index = arr.findIndex((el)=>el.id===id)

      const oldItem=arr[index]
      const newItem={...oldItem,[propName]:!oldItem[propName]}

      return[
        ...arr.slice(0,index),
        newItem,
        ...arr.slice(index+1)
      ]
  }
  onToggleImportant=(id)=>{
    this.setState(({todoData})=>{
      return{
        todoData:this.toggleProperty(todoData,id,'important')
      }
    })
  }
  onToggleDone=(id)=>{
    this.setState(({todoData})=>{
      return{
        todoData: this.toggleProperty(todoData,id,'done')
      }
    })
  }

  search(items,term){

    if(term.length === 0 ){
      return items
    }

    return items.filter((item)=>{
      return item.value.toLowerCase().indexOf(term.toLowerCase())>-1
    })
  }
  onSearchChange = (term) =>{
    this.setState({term})
  }

  filter(items,filter){
    switch(filter){
      case 'all':
        return items;
      case 'active':
        return items.filter((item)=>!item.done)
      case 'done':
        return items.filter((item)=>item.done)
      default:
        return items;
    }
  }

  onFilterChange = (filter)=>{
    this.setState({filter})
  }

  render(){

    const {term,filter}=this.state

    const visibleItems=this.filter(this.search(this.state.todoData,term),filter)
    const doneCount = this.state.todoData.filter((el)=>el.done).length
    const todoCount = this.state.todoData.length - doneCount
    return(
      <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={this.onSearchChange} />
        <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
      </div>

      <TodoList todos={visibleItems} 
      onDeleted={this.deleteItem}
      onToggleImportant={this.onToggleImportant}
      onToggleDone={this.onToggleDone}
      />
      <ItemAddForm onItemAdded={this.addItem}/>
    </div>
    )
  }
};

