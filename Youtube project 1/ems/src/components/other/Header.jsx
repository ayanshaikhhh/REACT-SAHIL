import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'
import '../../CSS/h.css'

const Header = (props) => {
  

  // const [username, setUserName] = useState('')

  // if(!data) {
  //   setUserName('Admin')
  // } else {
  //   setUserName(data.firstname)
  // }



  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // console.log(props.changeUser)
    // window.location.reload()

  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'> username 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm cursor-pointer '>Log Out</button>
    </div>
  )
}


export default Header
