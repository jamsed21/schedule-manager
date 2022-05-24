import React from 'react';

import Todo from './Todo';
import style from './todos.module.css';

const Todos = (props) => {
  return (
    <section className={style.todos}>
        {
            props.Todos.map((todo) => 
            <Todo todo={todo.todo} key={todo.id} id={todo.id} removeTodo={props.removeTodo}/>)
        }
    </section>
  )
}

export default Todos