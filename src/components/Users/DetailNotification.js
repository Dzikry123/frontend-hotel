import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderAdmin from '../../utils/HeaderAdmin';



const DetailNotification = () => {

  const [message, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    getNotifications()
  }, [])

  const getNotifications = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/messages/${id}`)
      setMessages(response.data)
      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert('Could not get the message')
    }
  }

  return (
    <div className='container'>
      <HeaderAdmin />
      {message && message ? (
        // Display the form with fetched data
        <form
          className="max-w-md mx-auto mt-28 p-4 border border-gray-300 shadow-md rounded-md"
        >
          <h2 className="text-2xl font-medium mb-4">Detail Problem</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={message.name}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-500 disabled:opacity-30 cursor-not-allowed"
              value={message.message}
              readOnly
            >
            </textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="sended" className="block font-medium text-gray-700">Message Sended At </label>
            <input
              type="text"
              id="sended"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={message.createdAt?.split('T')[0]}
              readOnly
            />
          </div>
          <Link
            to='/notifications'
            className="w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Back to Notification Lists
          </Link>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailNotification;
