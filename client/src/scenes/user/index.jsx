import React from 'react'


const User = ({isLoggedin}) => {
  return (
    isLoggedin ? <div>user</div> : <div>not user</div>
  )
}

export default User