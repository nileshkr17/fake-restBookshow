
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { PaperClipIcon } from '@heroicons/react/outline';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const storedCustomerName = JSON.parse(localStorage.getItem('customerName'));
  const storedMovieName = JSON.parse(localStorage.getItem('movieName')) || '';
  const storedTime = JSON.parse(localStorage.getItem('time'))?.slice(0, 21);
  const storedSeatNumber = JSON.parse(localStorage.getItem('seatNumber'));
  const [selectedTags, setSelectedTags] = useState([]);

  const seatNumbers = storedSeatNumber ? storedSeatNumber.split(',').map(Number) : [];

  const genreTags = [
    { label: 'Action', color: 'red' },
    { label: 'Adventure', color: 'blue' },
    { label: 'Comedy', color: 'green' },
    { label: 'Drama', color: 'purple' },
    // Add more tags as needed
  ];

  const handleTagSelection = (tag) => {
    setSelectedTags((prevTags) => [...prevTags, tag]);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center w-[60%] mx-auto px-4 mt-3 py-8 bg-white rounded-lg shadow">
      {isAuthenticated ? (
        <>
          {/* User avatar */}
          <img
            src={user.picture}
            alt={user.name}
            className="w-8 h-8 rounded-full cursor-pointer"
          />
          {/* Username */}
          <span className="text-gray-800 ml-2">{user.name}</span>

          {/* User Information */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold items-center justify-center text-gray-900">User Information</h3>
            {/* <p className="mt-1 text-sm text-gray-500">Personal details and application.</p> */}
          </div>

          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.name}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Genre</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <div className="flex gap-2">
                    {genreTags.map((tag) => (
                      <div
                        key={tag.label}
                        onClick={() => handleTagSelection(tag)}
                        className={`cursor-pointer p-1 rounded-lg bg-${tag.color}-200 text-${tag.color}-800`}
                      >
                        {tag.label}
                      </div>
                    ))}
                    <div className="cursor-pointer p-1 rounded-lg bg-gray-200 text-gray-800">
                      <FiPlus className="h-4 w-4 inline-block" />
                    </div>
                  </div>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Tickets</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <div className="ml-4 flex min-w-0  flex-1 gap-2">
                          {/* Fetch ticket details from local storage */}
                          <span className="">{storedCustomerName}</span>
                          <span className="">{storedMovieName}</span>
                          <span className="">{storedTime}</span>
                          <span className="">{storedSeatNumber}</span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <Link to="/ticket">
                        <li className="font-medium text-indigo-600 hover:text-indigo-500">
                          Download
                        </li>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </>
      ) : (
        // Login button
        <div className="text-center p-20">
          <div className="text-7xl">Page Not Found</div>
          <div className="text-7xl">404</div>
          <div className="mt-4">
            <button
              onClick={() => loginWithRedirect()}
              className="hover:text-red-600 hover:cursor-pointer"
            >
              <span className="text-lg">Login</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
