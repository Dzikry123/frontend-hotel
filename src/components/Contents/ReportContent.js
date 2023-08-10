import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import the useParams hook
import axios from 'axios';
import Header from '../../utils/Header';

const ReportContent = () => {
  const { id } = useParams(); // Use the useParams hook to access the content ID
  const [content, setContent] = useState(null);
  const [status, setStatus] = useState("On Progress")
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch data based on the content ID
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/content/${id}`);
        setContent(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
    fetchData();
    console.log(fetchData());
  }, [id]);

  // Additional code for form handling and submission can be implemented here

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:5000/content/${id}`, {
        status,
      })
      alert('Report successfull')
      console.log(response);

    }

    catch (error) {
      console.log(error);
      alert('Report error')
    }
    finally {
      navigate('/messages')
    }
  }

  return (
    <div className='container'>
      <Header />
      {content ? (
        // Display the form with fetched data
        <form
          className="max-w-md mx-auto mt-28 p-4 border border-gray-300 shadow-md rounded-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-medium mb-4">Detail Problem</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={content.name}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block font-medium text-gray-700">Amount</label>
            <input
              type="number"
              id="amount"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={content.amount}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              rows="4"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-500 disabled:opacity-30 cursor-not-allowed"
              value={content.desc}
              readOnly
            >
            </textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="area" className="block font-medium text-gray-700">Area</label>
            <input
              type="text"
              id="area"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={content.area}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block font-medium text-gray-700">Status</label>
            <select
              id="status"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option>{content.status}</option>
              <option>Finished</option>
              <option>On Progress</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Detail Image</label>
            <div className='mt-5 p-5 outline-dotted'>
              <img src={content.image.url} alt="Preview" className="w-full h-40 object-cover rounded-md border border-gray-300" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ReportContent;
