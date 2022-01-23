import { useRef } from 'react';
import { Link } from 'react-router-dom';

import Card from '../ui/Card';
import classes from './LoginForm.module.css';

function LoginForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    props.onLogin(enteredEmail, enteredPassword);
  }
  return (
    <div className={classes.logincard}>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' required id='email' ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              required
              id='password'
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            <div className={classes.link}>
              <Link to='/register'>Register</Link>
              <br />
              <Link to='/new-listing'>Forgot Password?</Link>
            </div>
            <button>Submit</button>
          </div>
        </form>
        <p>
            Username: test@me.com <br />
            Password: testtesttest
          </p>
      </Card>
    </div>
  );
}

export default LoginForm;
