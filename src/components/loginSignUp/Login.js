import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserLogin } from '../../actions/userActions';

export default function Login() {
  const dispatch = useDispatch();
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
    dispatch(setUserLogin(username, password));
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
