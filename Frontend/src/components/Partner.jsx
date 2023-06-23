import React from 'react';
import '../App.css'
const Partner = () => {
  const partnerData = [
    {
      id: 1,
      imageUrl: 'https://ik.imagekit.io/aklvscgup/inox.jpg?updatedAt=1687426631959',
    },
    {
      id: 2,
      imageUrl: 'https://ik.imagekit.io/aklvscgup/pvr.jpg?updatedAt=1687427233597',
    },
    {
      id: 3,
      imageUrl: 'https://ik.imagekit.io/aklvscgup/cine.webp?updatedAt=1687427349621',
    },
  ];

  return (
    <div className="w-full mx-auto bg-black ">
      <div className="grid grid-cols-1 gap-4 p-20">
        <div className="flex items-center justify-center">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Screening Partners</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {partnerData.map((partner) => (
            <img
              key={partner.id}
              src={partner.imageUrl}
              alt="Screening partner"
              className="object-cover w-100% h-20 m-2 rounded-md float-animation"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
