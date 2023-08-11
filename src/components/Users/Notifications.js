import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderAdmin from '../../utils/HeaderAdmin';



const Notifications = () => {

  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    getNotifications()
  }, [])

  const getNotifications = async () => {
    try {
      const response = await axios.get("https://hotel-backend-nine.vercel.app/messages")
      setMessages(response.data)
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteMessage = async (messageId) => {
    try {
      const response = await axios.delete(`https://hotel-backend-nine.vercel.app/messages/${messageId}`)
      setMessages(response.data)
      if (response.status === 200) {
        alert('Delete message successfully')
      }
      console.log(response.data);
      setMessages([])
      getNotifications()

    } catch (error) {
      console.log(error);
      alert('Error deleting message')
    }
    getNotifications()
  }



  return (
    <div className="px-10 mt-28 space-y-6">
      <HeaderAdmin />
      <h1 className="text-2xl font-semibold text-center">Notifications</h1>
      <div className="mt-12">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-10 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="px-10 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-10 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th className="px-10 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message sended At
              </th>
              <th className="px-10 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {messages &&
              messages.map((message, index) => (
                <tr key={message._id}>
                  <td className="px-6 py-4 text-center whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">{message.name}</td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">{message.message.slice(-10) + "...."}</td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">{message.createdAt.split('T')[0]}</td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <Link
                      to={`/detail-notification/${message._id}`}
                      className="inline-block mr-2 px-2 py-1 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Detail
                    </Link>
                    <button
                      className="inline-block px-2 py-1 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      onClick={() => deleteMessage(message._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;
