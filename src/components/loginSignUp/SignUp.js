import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setUserSignUp } from '../../actions/userActions';
import { Redirect  } from 'react-router-dom';
import { getError, isAuthenticated, getUserLoading } from '../../selectors/userSelectors';

export default function SignUp({ onClick }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const authenticated = useSelector(isAuthenticated);
  const authError = useSelector(getError);
  const userLoading = useSelector(getUserLoading);
  
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
    return <Redirect to="/app/create" />;
  }

  return (
    userLoading ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> :
      <>
        {authError && <p>{authError.message}</p>}
        <form className="authentication-form" onSubmit={handleSignupSumbit}>
          <input className="box-shadow" type='text' placeholder='username' value={username} onChange={handleUsernameChange} />
          <input className="box-shadow" type='password' placeholder='password' value={password} onChange={handlePasswordChange} />
          <button className="button-primary">Sign Up</button>
        </form>
        <a className="switch-form" onClick={() => onClick('login')}>Need to Login?</a>
      </>
  );
}
SignUp.propTypes = {
  onClick: PropTypes.func.isRequired
};
