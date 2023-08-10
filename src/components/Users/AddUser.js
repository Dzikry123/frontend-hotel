import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../../config/Firebase'

const AddUser = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [admin, setAdmin] = useState(false)
  const navigate = useNavigate();

  const userCollectionRef = collection(db, "userList")

  const addUser = async (e) => {
    e.preventDefault();
    try {
      await addDoc(userCollectionRef, { email: email, admin: admin, name: name, password: password });
      alert('User saved successfully');
    } catch (error) {
      console.log(error);
    } finally {
      navigate('/list-users')
    }
  }

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={addUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className='input'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='name'
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className='input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email'
                required
              />
            </div>
          </div>
          <div className='field'>
            <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
            <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setAdmin(e.target.value)}
            >
              <option selected disabled>Admin Status</option>
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="text"
                className='input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type='submit' className='button is-success'>Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser