import { useEffect } from 'react'

export const User = ({ name }) => {
    console.log("user contructor");
  useEffect (() => {
    console.log("user did mount");
  }, []);

  return (
    <div className='user-card'>
        {console.log("user return")}
        <h1> Name: { name } </h1>
        <h2 > Location: Pune </h2>
        <h3>Contact: @kiran</h3>
    </div>
  )
}
