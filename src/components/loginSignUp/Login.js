import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogin, userLoadingDone } from '../../actions/userActions';
import { useHistory, Redirect  } from 'react-router-dom';
import { getError, isAuthenticated, getUserLoading } from '../../selectors/userSelectors';

export default function Login({ onClick }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const authenticated = useSelector(isAuthenticated);
  const authError = useSelector(getError);
  const userLoading = useSelector(getUserLoading);
  
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

  if(authenticated && !userLoading) {
    return <Redirect to="/app/mixtapes" />;
  }

  return (
    <>
      {authError && <p>{authError.message}</p>}
      <form className="authentication-form" onSubmit={handleLoginSumbit}>
        <input className="box-shadow" type='text' placeholder='username' value={username} onChange={handleUsernameChange} />
        <input className="box-shadow" type='password' placeholder='password' value={password} onChange={handlePasswordChange} />
        <button className="button-primary">Log In</button>
      </form>
      <a className="switch-form" onClick={() => onClick('signup')}>Need to Sign Up?</a>
    </>
  );
}
Login.propTypes = {
  onClick: PropTypes.func.isRequired
};
