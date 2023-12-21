import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../lib/firebase';
import SignInAndSignUpButton from '../lib/components/buttons';
import '../../pages/styles/authentication.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  return (
    <div className="Style-Auth-fields">
      <div className="auth-container">
        <h2>Welcome Back!</h2>
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
        <SignInAndSignUpButton onClick={handleSignIn} label="Sign In" />
      </div>
    </div>
  );
}
