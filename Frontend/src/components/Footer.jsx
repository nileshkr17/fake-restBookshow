// import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// import './Footer.css'; // Import CSS file for styling

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-links">
//           <a href="/about">About Us</a>
//           <a href="/contact">Contact Us</a>
//           <a href="/terms">Terms of Service</a>
//           <a href="/privacy">Privacy Policy</a>
//         </div>
//         <div className="footer-social">
//           <a href="https://www.facebook.com/bookmyshowIN" target="_blank" rel="noopener noreferrer">
//             <FaFacebook />
//           </a>
//           <a href="https://twitter.com/BookMyShow" target="_blank" rel="noopener noreferrer">
//             <FaTwitter />
//           </a>
//           <a href="https://www.instagram.com/bookmyshowin" target="_blank" rel="noopener noreferrer">
//             <FaInstagram />
//           </a>
//           <a href="https://www.youtube.com/user/BookMyShow/featured" target="_blank" rel="noopener noreferrer">
//             <FaYoutube />
//           </a>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} BookMyShow. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';

const Footer = () => {
  const repoLink = 'https://github.com/nileshkr17/fake-restBookshow.git';

  return (
    <footer className="bg-black py-4 shadow-lg border-t-4 border-slate-700">
      <div className="container mx-auto text-white text-center">
        <p className="text-white">
          Made with ❤️ by <span className='italic'><a href={repoLink} className="text-white underline">
          .gitignore
          </a></span>
          <br />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
