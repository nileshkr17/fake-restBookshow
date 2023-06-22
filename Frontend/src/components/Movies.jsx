import React from 'react'
import '../App.css'
//all static data have been used 
export const Movies = () => {
  return (
    <div className='flex gap-5 p-6 transition-opacity duration-500' style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:"70vh"
        }}>
    <img src="https://image.tmdb.org/t/p/w500/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg" alt="" className='object-fit w-30 h-60 sm:h-80 md:h-30 lg:h-30 rounded-lg shadow-xl' />
    <div className='mt-5'>
        <h3 className='text-xl font-bold text-black'>Spider-Man: Across the spider-verse</h3>
        <div className='flex gap-2 mt-3'>
            <h3>
                <span className='cursor-pointor border-20 border-double p-4 border-red-400'>Genre</span>
            </h3>
        </div>
        <p className='text-black  mt-15 leading-[3rem]'>Set in the backdrop of Singareni coal mines near Godavarikhani of Telangana.</p>
        <p className='text-black font-bold'>Releasing soon</p>
        <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Play Trailer
          </a>
    </div>
    </div>
  )
}
