import React from 'react'

const TeamMemberCard = ({id,name,email,address}) => {
  return (
    <div>
       <h1>Name : {name}</h1>
            <p>ID : {id}</p>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
    </div>
  )
}

export default TeamMemberCard


