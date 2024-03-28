import React from 'react'
import LogRegTemplate from './LogRegTemplate'

const Register = () => {
  return (
    <div>
      <LogRegTemplate
      h1="Ayo bergabung bersama kami!"
      login={false}
      buttonText="Register"
       />
    </div>
  )
}

export default Register