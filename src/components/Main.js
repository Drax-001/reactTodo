import React from 'react'
import Input from './Input'
import ItemList from './ItemList'
import Nav from './Nav'

const Main = () => {
    return (
      <React.Fragment>
          <Nav />
        <div className="app">
          <Input />
          <ItemList />
        </div>
      </React.Fragment>
    );
}

export default Main
