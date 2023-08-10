
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { getDocs, collection, updateDoc, doc } from "firebase/firestore"
import { db } from '../../config/Firebase'

const EditUser = () => {
  const [uid, setUid] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [admin, setAdmin] = useState(false)
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const { id } = useParams();

  const userCollectionRef = collection(db, "userList",)

  useEffect(() => {
    getUserById()
  }, [])

  const getUserById = async () => {
    const data = await getDocs(userCollectionRef)
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(), id: doc.id,
    }))
    setUid(filteredData[0].id)
    setName(filteredData[0].name)
    setEmail(filteredData[0].email)
    setAdmin(filteredData[0].admin)
    setPassword(filteredData[0].password)
    console.log(filteredData[0])
  }

  const updateUser = async (id) => {
    try {
      const userUpdateDoc = doc(db, "userList", id)
      await updateDoc(userUpdateDoc, { email: email, admin: admin, name: name, password: password })
      alert('User updated successfully')
    } catch (error) {
      console.log(error)
    }
    finally {
      navigate('/list-users')
    }
  }

  // const getUserbyId = async () => {

  //   const response = await axios.get(`http://localhost:5000/users/${id}`);
  //   setName(response.data.name);
  //   setEmail(response.data.email);
  //   setAdmin(response.data.description);
  //   setPassword(response.data.password);
  // }

  // const updateUser2 = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.put(`http://localhost:5000/users/${id}`, {
  //       name,
  //       admin,
  //       email,
  //       password
  //     })
  //     alert('User updated successfully');
  //   } catch (error) {
  //     console.log(error.response.data);
  //     alert('User updated was failed');
  //   }
  //   finally {
  //     navigate('/')
  //   }
  // }

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className='input'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='name'
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className='input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email'
              />
            </div>
          </div>
          <div className='field'>
            <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
            <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setAdmin(e.target.value)}
            >
              <option selected disabled>{admin}</option>
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
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type='submit' className='button is-success' onClick={(e) => updateUser(id)}>Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditUser