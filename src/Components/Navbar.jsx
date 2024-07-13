// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-3 w-screen rounded-full">
//       <ul className="flex justify-around">
//         <li className="flex">
//           <NavLink 
//             exact 
//             to="/" 
//             className={({ isActive }) => 
//               isActive 
//                 ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
//                 : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
//             }
//           >
//             Home
//           </NavLink>
//         </li>
//          <li className="flex">
//           <NavLink 
//             to="/about" 
//             className={({ isActive }) => 
//               isActive 
//                 ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
//                 : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
//             }
//           >
//             About
//           </NavLink>
//         </li>
        
//         <li className="flex">
//           <NavLink 
//             to="/services" 
//             className={({ isActive }) => 
//               isActive 
//                 ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
//                 : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
//             }
//           >
//             Services
//           </NavLink>
//         </li>
        
//         <li className="flex">
//           <NavLink 
//             to="/client" 
//             className={({ isActive }) => 
//               isActive 
//                 ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
//                 : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
//             }
//           >
//             Client
//           </NavLink>
//         </li>
//         <li className="flex">
//           <NavLink 
//             to="/portfolio" 
//             className={({ isActive }) => 
//               isActive 
//                 ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
//                 : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
//             }
//           >
//             Portfolio
//           </NavLink>
//         </li>
//         <li className="flex">
//           <NavLink 
//             to="/blog" 
//             className={({ isActive }) => 
//               isActive 
//                 ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
//                 : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
//             }
//           >
//             Blog
//           </NavLink>
//         </li>
//         <li className="flex">
//           <NavLink 
//             to="/contact" 
//             className={({ isActive }) => 
//               isActive 
//                 ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
//                 : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
//             }
//           >
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'client', 'portfolio', 'blog', 'contact'];
            const scrollPosition = window.scrollY + 200;

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement && scrollPosition >= sectionElement.offsetTop && scrollPosition < sectionElement.offsetTop + sectionElement.clientHeight) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="bg-gray-800 text-white fixed top-0 w-full z-10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#home" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'home' ? 'text-yellow-400' : ''}`} onClick={() => setActiveSection('home')}>Home</a>
                        <a href="#about" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'about' ? 'text-yellow-400' : ''}`} onClick={() => setActiveSection('about')}>About</a>
                        <a href="#services" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'services' ? 'text-yellow-400' : ''}`} onClick={() => setActiveSection('services')}>Services</a>
                        <a href="#client" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'client' ? 'text-yellow-400' : ''}`} onClick={() => setActiveSection('client')}>Client</a>
                        <a href="#portfolio" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'portfolio' ? 'text-yellow-400' : ''}`} onClick={() => setActiveSection('portfolio')}>Portfolio</a>
                        <a href="#blog" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'blog' ? 'text-yellow-400' : ''}`} onClick={() => setActiveSection('blog')}>Blog</a>
                        <a href="#contact" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'contact' ? 'text-yellow-400' : ''}`} onClick={() => setActiveSection('contact')}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
