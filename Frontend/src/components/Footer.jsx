
import React from 'react';

const Footer = () => {
  const repoLink = 'https://github.com/nileshkr17/fake-restBookshow.git';

  return (
    <footer className="bg-black py-4 shadow-lg border-t-4 border-slate-700">
      <div className="container mx-auto text-white text-center">
        <p className="text-white">
          Made with ❤️ by <span className='italic'><a href={repoLink} className="text-white hover:underline">
          Nileshkr17
          </a></span>
          <br />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
