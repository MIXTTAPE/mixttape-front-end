import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserLogin, userLoadingDone } from '../../actions/userActions';

export default function Login({ onClick }) {
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
    dispatch(userLoadingDone());
  };

  return (
    <>
      <form className="authentication-form" onSubmit={handleLoginSumbit}>
        <input className="box-shadow" type='text' placeholder='username' value={username} onChange={handleUsernameChange} />
        <input className="box-shadow" type='password' placeholder='password' value={password} onChange={handlePasswordChange} />
        <button className="button-primary">Login</button>
      </form>
      <a className="switch-form" onClick={() => onClick('signup')}>Need to Sign Up?</a>
    </>
  );
}
