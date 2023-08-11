import React, { useState } from 'react'
import axios from 'axios'
import "../../css/addContent.css"
import HeaderAdmin from '../../utils/HeaderAdmin';
import { useNavigate } from 'react-router-dom';

const AddContent = () => {
  const maxSize = 5242880;
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const [contentImg, setContentImg] = useState("")
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)
  const [desc, setDesc] = useState("")
  const [area, setArea] = useState("")
  const [status, setStatus] = useState("On Progress") // check the gender, input radio typr in YT 

  console.log(contentImg);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    TransformFile(file); // transform to base64
  }

  // base64 encode
  const TransformFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file); // make an image into base64-encoded
      reader.onloadend = () => {
        setContentImg(reader.result)
      }
    } else {
      setContentImg("");
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (e && e.size > maxSize) {
        alert('Max size exceeded')
        return
      }
      else {
        setLoading(true)

        const response = await axios.post("https://hotel-backend-nine.vercel.app/content", {
          name,
          amount,
          desc,
          area,
          status,
          image: contentImg,
        })

        setLoading(false)
        alert('Upload successful')
        console.log(response.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    } finally {
      navigate('/content')
    }
  }

  return (
    <div className='container px-4 md:px-18 py-8'>
      <HeaderAdmin />
      <div className='my-8 text-center font-bold text-xl md:text-2xl mt-20'>Input a new Problem</div>
      {loading ? (
        <div className="loading top-0 left-0 flex items-center justify-center absolute w-72 h-80 mb-10 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div role="status">
            <svg aria-hidden="true" className="ml-6 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
            <span className="ml-2">Uploading...</span>
          </div>
        </div>
      ) : (
        <form
          action=""
          className={loading ? 'p-20 grid gap-10' : 'p-5 grid gap-10'}
          onSubmit={handleSubmit}
        >
          <div className='mb-5'>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Broken Table"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
              <input
                type="number"
                id="amount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="10"
                required
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </div>
            <div className='w-full'>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your description here..."
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              ></textarea>
            </div>
            <div>
              <label htmlFor="area" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area</label>
              <input
                type="text"
                id="area"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Area"
                required
                onChange={(e) => setArea(e.target.value)}
                value={area}
              />
            </div>
            <div>
              <label htmlFor="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
              <select
                id="default"
                className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              >
                <option disabled>Choose a Status</option>
                <option value="onProgress">On Progress</option>
                <option value="finished">Finished</option>
              </select>
              {/* image section */}
              <div className='mb-10'>
                <label htmlFor="file_input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Image</label>
                <input
                  className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  onChange={handleUploadImage}
                />

                <div className='mt-5 p-5 w-full h-full outline-dotted'>
                  {contentImg ? (
                    <img src={contentImg} alt="Preview" className="w-full h-auto object-cover rounded-md border border-gray-300" />
                  ) : (
                    <p className="text-gray-500">Image preview will appear here</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Submit
              </button>
            </div>
          </div>

        </form>
      )}
    </div>
  )
}

export default AddContent







