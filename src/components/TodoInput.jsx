import React, { useState } from 'react'

export default function TodoInput(props) {
    const { handleAddTodos,todoValue, setTodoValue } = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} className="todoItem" placeholder="Enter a todo..."/>
            <button onClick={() =>{
                 handleAddTodos(todoValue)
                 setTodoValue("")
                }} >Add</button>
        </header>
    )
}