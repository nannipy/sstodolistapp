import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, handleEditTodo, index  } = props
  return (
    <li className='todoItem'>
        {children}
        <div className='actionContainer'> 
            <button onClick={() => {
                handleEditTodo(index)
            }}>
                <i className="fa-solid fa-pen-to-square pl-8"></i>
            </button>
            <button onClick={() => {
                handleDeleteTodo(index)
            }}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
  )
}
