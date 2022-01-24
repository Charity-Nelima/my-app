import React, {useState} from 'react';

export default function TodoList() {
    const [todo,setTodo] = useState("berlin");
  return (<div>
      <h1>React App</h1>
      
      <input type="text" value ={todo} onChange={none}/>
  </div>
  );
}
