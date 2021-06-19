import React, { useState, useEffect } from 'react'
import Input from './Input'
import ItemList from './ItemList'
import Nav from './Nav'

const Main = () => {

  const [item, setItem] = useState([]);
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('task'))
    if (tasks) {
      setItem(tasks);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(item))
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
