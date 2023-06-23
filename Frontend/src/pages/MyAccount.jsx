import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { PaperClipIcon } from '@heroicons/react/outline';

const MyAccount = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

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
                <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                  qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                  pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Tickets</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          {/* fetch ticket details from localstorage */}
                          {/* <span className="">{localStorage.getItem(movieName)} </span> */}
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Download
                        </a>
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



// {isAuthenticated ? (
//   <>
//     {/* User avatar */}
//     <img
//       src={user.picture}
//       alt={user.name}
//       className="w-8 h-8 rounded-full ml-10 cursor-pointer"
//     />
//     {/* Username */}
//     <span className="text-white ml-2">{user.name}</span>
//   </>
// ) : (
//   // Login button
//   <button
//     onClick={() => loginWithRedirect()}
//     className="hover:text-red-600 hover:cursor-pointer ml-10"
//   >
//     Login
//   </button>

// )}