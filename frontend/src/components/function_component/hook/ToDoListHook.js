import React, { useState } from 'react';

export default function ToDoListHook (props)
{   
    let data = ["One","Two","Three"];

    const [todo , setTodo] = useState(data);
    const [todoitem , setTodoitem] = useState('');

    const addToHandler = () => {
        setTodo( [...todo,todoitem] )
    };

    return (<div>

        <div>
            <input type = {"text"} className = {"form-control"} 
                   value = {todoitem} 
                   onChange = {(event) => setTodoitem(event.target.value)} /> 

            <button type = {"button"} className = {"btn btn-primary"} 
                    onClick = {addToHandler} > Add </button>
        </div>

        

        { 
            todo.map((todos,index) => {
                return (<div key={index}>
                    {todos}
                </div>)} )
        }

    </div>);
}