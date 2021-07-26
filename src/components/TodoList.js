import React from 'react';

import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    const { id, value,important } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem value={value} important={important} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
// import React from 'react'
// import TodoListItem from './TodoListItem'
// import './TodoList.css'
// const TodoList = ({todos})=>{

    
//     const elemets = todos.map((item)=>{         
//         const {id,value,important} = item
//         return (
//             // <li><TodoListItem value={item.value} important={item.important}/></li>
//             // <li><TodoListItem {...item}/></li>
//             <li className="list-group-item" key={id}><TodoListItem value={value} important={important}/></li>
//         )
//     })
//     return(
//         <ul className="list-group todo-list">
//             {elemets}
//         </ul>
//     )
// }


// export default TodoList