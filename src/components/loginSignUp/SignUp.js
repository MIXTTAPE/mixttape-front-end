import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserSignUp, userLoadingDone } from '../../actions/userActions';
import { useHistory, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../selectors/userSelectors';

export default function SignUp({ onClick }) {
  const dispatch = useDispatch();
  const authenticated = useSelector(isAuthenticated);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  
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

  

  if(authenticated) {
    return <Redirect to="/app" />;
  }
  return (
    <>
      <form className="authentication-form" onSubmit={handleSignupSumbit}>
        <input className="box-shadow" type='text' placeholder='username' value={username} onChange={handleUsernameChange} />
        <input className="box-shadow" type='password' placeholder='password' value={password} onChange={handlePasswordChange} />
        <button className="button-primary">Sign Up</button>
      </form>
      <a className="switch-form" onClick={() => onClick('login')}>Need to Login?</a>
    </>
  );
}
