import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import RegisterForm from '../components/auth/RegisterForm';

function RegisterPage() {
  const navigate = useNavigate();
  const auth = getAuth();

  function onRegisterHandler(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
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
      <h1>Register Page</h1>
      <RegisterForm onRegister={onRegisterHandler} />
    </section>
  );
}

export default RegisterPage;
