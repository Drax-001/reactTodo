import React, { useRef, useState } from 'react'

const Input = ({ item, setItem }) => {

    const [value, setValue] = useState('')
    const input = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.trim() !== "") {
            const id = new Date().getTime().toString();
            const newTask = { id: id, taskName: value }
            setItem([...item, newTask])
        }
        input.current.focus()
        setValue("")
    }

    return (
      <div className="input-container">
        <form className="form">
          <input
            type="text"
            ref={input}
            value={value}
            className="input"
            autoCapitalize="true"
            autoFocus
            placeholder="eg. Do something new"
            onInput={() => setValue(input.current.value)}
          />
          <button onClick={(e) => handleSubmit(e)} className="add-item-btn">
            Add Task
          </button>
        </form>
      </div>
    );
}

export default Input
