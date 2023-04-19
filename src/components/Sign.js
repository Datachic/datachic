import React from 'react'

function Sign() {
  return (
    <p> Copyright &copy; Mary Alabi - {new Date().getFullYear()} Scripteur,  Inc. 
           <a href="https://react.dev/learn"> Privacy</a> 
             &middot;   <a href="https://react.dev/learn"> Terms</a>
     </p>
  )
}

export default Sign