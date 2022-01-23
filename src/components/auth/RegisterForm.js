import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './RegisterForm.module.css';

function RegisterForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    props.onRegister(enteredEmail, enteredPassword);
  }
  return (
    <div className={classes.registercard}>
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
            <button>Submit</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default RegisterForm;
