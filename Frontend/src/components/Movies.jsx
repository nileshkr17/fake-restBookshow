import React from 'react'
import '../App.css'
//all static data have been used 
export const Movies = () => {
  return (
    <div className='flex gap-5 p-6' style={{
        backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BYWJkZGMxYjUtNDdkMC00MDQxLWI2M2QtZmM2ZGIyODYyZDc3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"center",
        height:"70vh"
        }}>
    {/* <img src="https://image.tmdb.org/t/p/w500/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg" alt="" className='object-fit w-30 h-60 sm:h-80 md:h-30 lg:h-30 rounded-lg shadow-xl' /> */}
    <div className='mt-40 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-black' style={{width:"50%"}}>
        <h3 className='text-xl font-bold text-white'>Spider-Man: Across the spider-verse</h3>
        <div className='flex gap-2 mt-3'>
            <h3>
                <span className='text-slate-500 '>Genre</span>
            </h3>
        </div>
        <p className='text-white  mt-15 leading-[1.5rem]'>Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.</p>
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
