import React, { useState } from 'react'

import {v4 as uuidv4} from "uuid";

import Todos from './Todos'
import style from './Home.module.css'
import Form from './Form'


const Home = () => {

    const [todos, setTodos] = useState([]);

    const handleAdd = (todo) =>{
       setTodos((previousTodos) =>{
        return [...previousTodos,{id: uuidv4(), todo}]
    })
 };


    const removeTodo = (id) =>{
        setTodos((previousTodos) => {
            const filteredTodos = previousTodos.filter((todo) => todo.id != id);
            return filteredTodos;
        });
    }
 

  return (
    <div className={style.container}>
        <h1 className={style.hedaingStyle}> TO-DO APP </h1>
        <Form addTodo={handleAdd}/>
        <Todos Todos ={todos} removeTodo={removeTodo}/>
    </div>
  )
}

export default Home