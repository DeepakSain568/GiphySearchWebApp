import React from 'react';
import { useRouter } from 'next/router';
import '../../pages/styles/button.css';



  
  const SignInAndSignUpButton = ({ onClick, label, href }) => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push(href);
    };
  
    return (
      <button class="auth" onClick={onClick || handleClick}>
        {label}
      </button>
    );
  };
  
  export default SignInAndSignUpButton;
