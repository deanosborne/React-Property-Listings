import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from '../components/auth/LoginForm';

function LoginPage() {
  const navigate = useNavigate();
  const auth = getAuth();

  function onLoginHandler(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error ocured: ", errorCode, errorMessage);
    }).then(() => {
      navigate('/');
    });
  }
  return (
    <section>
      <h1>Login Page</h1>
      <LoginForm onLogin={onLoginHandler} />
    </section>
  );
}

export default LoginPage;
