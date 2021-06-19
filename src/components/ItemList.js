import React from 'react'

const ItemList = ({ item, setItem }) => {
  
  const removeTask = (id) => {
    const filteredItem = item.filter((item) => item.id !== id)
    setItem(filteredItem)
  }
    return (
        <div className="item-list">
            {item.map((task) => {
                const { id, taskName } = task;
                return (
                  <div key={id} className="task">
                    <div className="task-name">
                      <p className="text" htmlFor={id}>
                        {taskName}
                      </p>
                    </div>
                    <div className="removeCont">
                      <button className="remove" onClick={() => removeTask(id)}>
                        <span className="fa fa-check"></span>
                      </button>
                    </div>
                  </div>
                );
            })}
        </div>
    )
}

export default ItemList
