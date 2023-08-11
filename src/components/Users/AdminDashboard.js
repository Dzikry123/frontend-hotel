import React from 'react';
import { Link } from 'react-router-dom';
import HeaderAdmin from '../../utils/HeaderAdmin';

const AdminDashboard = () => {
  return (
    <div className='container mx-auto p-6 md:p-10'>
      <HeaderAdmin />
      <h1 className='text-center mt-20 mb-10 font-mono font-bold text-4xl'>Admin Dashboard</h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" alt="" />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              List Problems
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/content"
              className="block rounded bg-blue-700 py-2 px-4 text-xs text-white text-center font-medium shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              List Problems
            </Link>
          </div>
        </div>
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" alt="" />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Upload Problem
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/upload"
              className="block rounded bg-blue-700 py-2 px-4 text-xs text-white text-center font-medium shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Upload Problem
            </Link>
          </div>
        </div>
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" alt="" />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Notifications
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/notifications"
              className="block rounded bg-blue-700 py-2 px-4 text-xs text-white text-center font-medium shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Notifications
            </Link>
          </div>
        </div>
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" alt="" />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              List Problems ( For admin )
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/content-admin"
              className="block rounded bg-blue-700 py-2 px-4 text-xs text-white text-center font-medium shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              List Problems
            </Link>
          </div>
        </div>
        {/* Add the remaining cards as needed */}
      </div>
    </div>
  );
};

export default AdminDashboard;
