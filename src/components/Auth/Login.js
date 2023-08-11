import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundImage from '../../img/pexels-cottonbro-studio-4253300.jpg'
import { auth } from '../../config/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  console.log(auth);

  const logIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);
      // Proceed with your login logic or navigate to the desired page
      // ...
      alert('User successfully signed in');
      navigate('/content')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Login error:', errorCode, errorMessage);
      // Handle the error or display an error message to the user
      // ...
      alert('Wrong email or password')
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white shadow-lg rounded px-8 pt-12 pb-8 mb-4 lg:w-1/3 md:w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center">Hotel Management</h2>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="Username"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500 text-xs italic">Please enter a password.</p>
        </div>
        <div className="flex flex-col items-center">
          <a className="text-sm text-blue-500 hover:text-blue-800 font-thin mb-4" href="#">
            Forgot Password?
          </a>
          <p className="text-sm text-gray-700 mb-5">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:text-blue-800">
              Register here
            </Link>
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={logIn}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
