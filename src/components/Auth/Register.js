import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundImage from '../../img/pexels-cottonbro-studio-4253300.jpg'
import { auth } from '../../config/Firebase';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const signIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Registered user:', user);
      alert('User Registration Successful')
      // Proceed with your registration logic or navigate to the desired page
      // ...
      alert('Please Sign in again with your email and password');
      navigate('/')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Registration error:', errorCode, errorMessage);
      // Handle the error or display an error message to the user
      // ...
      alert("Can't register, please try again ")
    }
  };


  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white shadow-lg rounded px-8 pt-12 pb-8 mb-4 lg:w-1/3 md:w-1/2">
        <h2 className="text-2xl font-bold mb-6 md:mb-10 text-center">Hotel Management</h2>
        <h5 className="text-small font-bold mb-4 md:mb-6 text-center">( Register Form )</h5>
        <div className="mb-4 md:mb-6">
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
        <div className="mb-4 md:mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-1 md:mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500 text-xs italic md:hidden">Minimun 6 characters.</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-700 mb-4 md:mb-5">
            already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:text-blue-800">
              Login here
            </Link>
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 md:px-8 rounded focus:outline-none focus:shadow-outline mb-2 md:mb-3"
            type="submit"
            onClick={signIn}
          >
            Sign Up
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 md:px-8 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={logout}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
