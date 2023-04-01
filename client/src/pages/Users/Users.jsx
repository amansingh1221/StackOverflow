import React from 'react'
// import { useLocation } from 'react-router-dom'
import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'


const Users = () => {
  // const location = useLocation()
// console.log("hii");

  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2' style={{marginTop:"30px"}}>
      <div className='user-container'>
      <h1 style={{fontWeight:"400"}}>Users</h1>
      <UsersList />
      </div>

      </div>
    </div>
  )
}

export default Users