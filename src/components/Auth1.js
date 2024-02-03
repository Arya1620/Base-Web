import React from 'react'
import { GoogleLogin } from '@react-oauth/google';


const Auth1 = () => {
  return (<GoogleLogin
    onSuccess={credentialResponse => {
      console.log(credentialResponse);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
  );
}

export default Auth1
