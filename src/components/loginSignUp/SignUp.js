import React, { useState } from 'react';
import { signUp } from '../../services/auth';
import { useDispatch } from 'react-redux';
import { setUserSignUp } from '../../actions/userActions';

export default function SignUp() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleUsernameChange = ({ target }) => {
    setUsername(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleSignupSumbit = (event) => {
    event.preventDefault();
    dispatch(setUserSignUp(username, password));
  };

  return (
    <>
      <form onSubmit={handleSignupSumbit}>
        <input type='text' placeholder='username' value={username} onChange={handleUsernameChange} />
        <input type='password' placeholder='password' value={password} onChange={handlePasswordChange} />
        <button className="button-primary">Sign up!</button>
      </form>
    </>
  );
}
