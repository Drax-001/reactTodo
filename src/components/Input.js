import React, { useState } from 'react'

const Input = () => {

    const [value, setValue] = useState('')

    return (
        <div className="input-container">
            <form className="form">
                <input type="text"
                    value={value}
                    className="input" placeholder="eg. Do something new"
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className="add-item-btn">Add Task</button>
            </form>
        </div>
    )
}

export default Input
