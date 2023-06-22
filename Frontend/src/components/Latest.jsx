import React from 'react'

const Latest = () => {
  return (
    <div className="bg-black w-full h-screen mt-10  text-white  ">
         <div className=" max-w-[1240px] mx-auto   pt-10 ">
         <h2 className="text-2xl font-bold pb-10 text-white">
              Latest Movies
            </h2>
        <div className="grid grid-cols-4 gap-4  w-full h-50  whitespace-nowrap overflow-auto  ">
          <div className="flex items-center justify-center ">
            <img
              src="https://www.heavenofhorror.com/wp-content/uploads/2020/04/time-to-hunt-netflix-review.jpg"
              alt="Upcoming movies"
              className="object-cover w-30 h-30 rounded-md "
            />
          </div>
          <div className="flex items-center justify-center ">
            <img
              src="https://www.heavenofhorror.com/wp-content/uploads/2020/04/time-to-hunt-netflix-review.jpg"
              alt="Upcoming movies"
              className="object-cover w-30 h-30 rounded-md "
              on
            />
          </div>
          <div className="flex items-center justify-center ">
            <img
              src="https://www.heavenofhorror.com/wp-content/uploads/2020/04/time-to-hunt-netflix-review.jpg"
              alt="Upcoming movies"
              className="object-cover w-30 h-30 rounded-md "
            />
          </div>
          <div className="flex items-center justify-center ">
            <img
              src="https://www.heavenofhorror.com/wp-content/uploads/2020/04/time-to-hunt-netflix-review.jpg"
              alt="Upcoming movies"
              className="object-cover w-30 h-30 rounded-md "
            />
          </div>     
        </div>
      </div>
        </div>
   
  )
}

export default Latest