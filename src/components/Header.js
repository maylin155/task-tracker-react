import React from 'react'
import Button from './Button'

const Header = ({onAdd, showForm}) => {

  return (
    <div className='header'>
        <h1>Task Tracker</h1>
        <Button color='black' text={showForm ? 'Close' : 'Add'} onClick={onAdd} />
    </div>
  )
}

export default Header;