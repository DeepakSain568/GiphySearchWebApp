import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../lib/firebase';
import { useRouter } from 'next/router';
import SignInAndSignUpButton from '../lib/components/buttons';
import '../../styles/authentication.css';


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      console.error('Sign-up error:', error);
    }
  };

  return (
    <div className="Style-Auth-fields">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <div className="input-container">
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <SignInAndSignUpButton onClick={handleSignUp} label="Sign Up" />
      </div>
      </div>
  );
}
