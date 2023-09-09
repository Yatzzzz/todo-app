import React, {useState} from 'react'

const EditTodoForm = ({editTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value)

        setValue("")
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' placeholder='Düzenle' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Gönder</button>
        </form>
    )
}

export default EditTodoForm;