import React from 'react'

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  
  return (
    <div>
      <h2>DASHBOARD USER {id}</h2>
      <p>Details for user {id}</p>
    </div>
  )
}

export default UserDetails