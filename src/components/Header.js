import React from 'react'

const Header = ({titulo}) => {
  return (
    
    <nav>
      <div className='nav-wrapper  blue-grey darken-3'>
          <a href='#!' className='brand-logo center'>{titulo}</a>
      </div>
    </nav>
   
  )
}

export default Header
