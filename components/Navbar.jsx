import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../routes/navLinks';

const Navbar = () => {
   return (
      <nav className="bg-[#3d3fd4dd] mb-8 shadow-lg">
         <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            <div className="flex-shrink-0 cursor-pointer">
               <Image
                  src="/images/home.png"
                  alt="home"
                  width={40}
                  height={40}
               />
            </div>
            <div className="hidden md:flex">
               <ul className="flex space-x-2 lg:space-x-4">
                  {navLinks.map(({ text, route }) => (
                     <li
                        key={text}
                        className="text-gray-100 font-semibold text-md py-2 px-3 hover:bg-[#3c3d85dd] rounded-lg ease-in duration-150 cursor-pointer "
                     >
                        <Link href={route}>{text}</Link>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="mr-2 flex md:hidden">
               <button
                  type="button"
                  className="bg-[#3c3d85dd] hover:bg-transparent ease-in duration-150 p-1 rounded-md flex items-center justify-center text-gray-100 focus:outline-none focus:ring-2 focus:border-none"
                  aria-controls="mobile-menu"
               >
                  <svg
                     className="block h-8 w-8"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     aria-hidden="true"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                     />
                  </svg>
               </button>
            </div>
         </section>
      </nav>
   );
};
export default Navbar;
