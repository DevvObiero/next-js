import React from 'react'
import Link from 'next/link'
const Users = () => {
  return (
    <div>
      <h2>DASHBOARD USERS</h2>
      <ul className='mt-10'>
        <li className='mt-10 text-red-600 ' >   <Link href="/dashboard/users/1">User 1</Link> </li>
        <li className='mt-10 text-red-600 ' >   <Link href="/dashboard/users/2">User 2</Link> </li>
        <li className='mt-10 text-red-600 ' >   <Link href="/dashboard/users/3">User 3</Link> </li>
        <li className='mt-10 text-red-600 ' >   <Link href="/dashboard/users/4">User 4</Link> </li>

      </ul>
    </div>
  )
}

export default Users
