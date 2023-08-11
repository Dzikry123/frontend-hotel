import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundImage from '../../img/pexels-cottonbro-studio-4253300.jpg';
import Header from '../../utils/Header';


import '../../css/search.css';

const GetContents = () => {
  const [contents, setContent] = useState([]);
  const navigate = useNavigate();


 
  const handleSearch = async (e) => {
    let query = e.target.value
    if (query) {
      const response = await axios.get(`https://hotel-backend-nine.vercel.app/content?name=${query}`)
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
    const response = await axios.get('https://hotel-backend-nine.vercel.app/content');
    setContent(response.data);
    console.log(response.data);
  };



  return (
    <div
      className='container p-5'
    // style={{
    //   backgroundImage: `url(${BackgroundImage})`,
    //   backgroundSize: 'contain',
    //   backgroundPosition: 'center',
    // }}
    >

      <Header />
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-10'>
        {
          contents && contents.map((content, index) => (
            <div
              className='max-w-sm shadow-xl shadow-indigo-500/50 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700'
              key={content._id}
            >
              <div className=''>
                <img className='rounded-t-lg' src={content.image.secure_url} alt='' />
              </div>
              <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
                  {content.name}
                </h5>
                <p className='mb-3 font-normal text-gray-700'>
                  Description : {content.desc.slice(-10) + '....'}
                </p>
                <p className='mb-3 font-normal text-gray-700'>Amount : {content.amount}</p>
                <p className='mb-3 font-normal text-gray-700'>
                  Area : <span className='font-bold text-blue-800'>{content.area}</span>
                </p>
                <p className='mb-3 font-normal text-gray-700'>
                  Status : <span className='font-bold text-red-600'>{content.status}</span>
                </p>
                <p className='mb-3 font-normal text-gray-700'>
                  Uploaded At : {content.createdAt.split('T')[0]}
                </p>
                <div className='grid gap-4 p-3'>
                  <Link
                    to={`/report/${content._id}`}
                    className='inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                  >
                    Report
                    <svg
                      className='w-3.5 h-3.5 ml-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 10'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M1 5h12m0 0L9 1m4 4L9 9'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default GetContents;
