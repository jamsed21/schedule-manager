import React, { useState } from 'react';

import style from './Form.module.css';

const Form = (props) => {

    const[todo, setTodo] = useState({title: "", description: ""});
    const {title, description} = todo;

    const handleChange =(event) =>{
        const name = event.target.name;
        setTodo((oldTodo) => {
            return {... oldTodo, [name]: event.target.value}
        })
    }


    const handleSubmit= (event) =>{
        event.preventDefault();
        props.addTodo(todo);
        setTodo({title: "", description: ""});
    }; 


  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
           <label htmlFor='title'> Titile: </label> 
           <input type="text" id='title' required name='title' value={title}  onChange={handleChange}/>
        </div>

        <div className={style["form-field"]}>
           <label htmlFor='description'> Description: </label> 
           <textarea type="text" id='description' name='description' required value={description} onChange={handleChange} />
        </div>
        <button type='submit'>Add Work shedule</button>
    </form>
  )
}

export default Form