import React, { useState } from 'react';
import Link from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleUsernameChange = ({ target }) => {
    setUsername(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleLoginSumbit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <>
      <form onSubmit={handleLoginSumbit}>
        <input type='text' placeholder='username' value={username} onChange={handleUsernameChange} />
        <input type='password' placeholder='password' value={password} onChange={handlePasswordChange} />
        <button className="button-primary">Login</button>
      </form>
    </>
  );
}
