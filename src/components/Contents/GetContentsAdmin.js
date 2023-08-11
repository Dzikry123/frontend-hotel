import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BackgroundImage from '../../img/pexels-cottonbro-studio-4253300.jpg';
import HeaderAdmin from '../../utils/HeaderAdmin';


import '../../css/search.css';

const GetContents = () => {
  const [contents, setContent] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams(); // Use the useParams hook to access the content ID
  const [deleted, setDeleted] = useState("")

  const handleSearch = async (e) => {
    let query = e.target.value
    if (query) {
      const response = await axios.get(`http://localhost:5000/content?name=${query}`)
      if (response) {
        setContent(response.data);
        console.log(response.data);
      }
    } else {
      getContent()
    }
  }

  useEffect(() => {
    getContent();
  }, []);

  const getContent = async () => {
    const response = await axios.get('http://localhost:5000/content');
    setContent(response.data);
    console.log(response.data);
  };

  const deleteContent = async (contentId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/content/${contentId}`)
      setContent((prevContents) => prevContents.filter(content => content._id !== contentId));
      alert('Delete successfull')
    } catch (error) {
      console.log(error);
    }
    getContent()
  }


  return (
    <div
      className='container p-5'
    // style={{
    //   backgroundImage: `url(${BackgroundImage})`,
    //   backgroundSize: 'contain',
    //   backgroundPosition: 'center',
    // }}
    >
      <HeaderAdmin />
      <h1
        className='font-bold text-center  text-4xl shadow-indigo-500/50 mt-20'
        style={{
          // textShadow: '2px 2px 8px #FFF'
        }}
      >
        List Problems
      </h1>
      <div>
        <div className='flex justify-center w-full mx-auto mt-10'>
          <input
            type='text'
            placeholder='Search the problems here...'
            onChange={handleSearch}
            className='input py-5 border border-gray-600 border-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300'
          />
        </div>
      </div>

      <div className="mt-12">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Area
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Uploaded At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contents &&
              contents.map((content) => (
                <tr key={content._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded"
                          src={content.image.secure_url}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {content.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{content.desc.slice(-10) + "...."}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{content.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-blue-800 font-bold">{content.area}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-red-600 font-bold">{content.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{content.createdAt.split('T')[0]}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to={`/report/${content._id}`}
                      className="inline-block mr-2 px-2 py-1 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Report
                    </Link>
                    <button
                      className="inline-block px-2 py-1 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      onClick={() => deleteContent(content._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>



    </div >
  );
};

export default GetContents;
