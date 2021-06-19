import React, { useState, useEffect } from 'react'
import Input from './Input'
import ItemList from './ItemList'
import Nav from './Nav'

const Main = () => {

  const [item, setItem] = useState([]);
  const [count, setCount] = useState(item.length)

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('task'))
    if (tasks) {
      setItem(tasks);
      setCount(tasks.length)
      document.title = `Tasks: ${count}`;
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(item))
    document.title = `Tasks: ${item.length}`;
  }, [item])
  
    return (
      <React.Fragment>
        <Nav />
        <div className="app">
          <Input setItem={setItem} item={item} />
          <ItemList item={item} setItem={setItem} />
        </div>
      </React.Fragment>
    );
}

export default Main
