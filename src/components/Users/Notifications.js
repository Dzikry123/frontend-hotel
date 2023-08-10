import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../../utils/HeaderAdmin';



const Notifications = () => {

  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getNotifications()
  }, [])

  const getNotifications = async () => {
    try {
      const response = await axios.get("http://localhost:5000/messages")
      setMessages(response.data)
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-28 space-y-6">
      <HeaderAdmin />
      <h1 className="text-2xl font-semibold text-center">Notifications</h1>
      <div className='grid grid-cols-1 gap-10 w-full'>
        {messages.map((message, index) => (
          <div
            key={message._id}
          >
            <div className="w-full flex bg-white dark:bg-gray-800 border border-blue-4000 shadow-md shadow-blue-500/50 rounded-lg"          >
              <div className="p-8 flex flex-col items-start space-x-4 gap-10">
                <svg class="w-6 h-6 ml-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                  <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                </svg>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                </svg>
              </div>
              <div className="flex flex-col flex-1">
                <span className="mb-1 font-semibold text-gray-900 dark:text-white mt-7">{message.name}</span>

                <span className="mb-1 font-semibold text-gray-900 dark:text-white mt-8">Message</span>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  {message.message}
                </p>
                <span className="mb-1 font-semibold text-gray-900 dark:text-white mt-2">Message Send At : </span>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  {message.createdAt.split('T')[0]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
