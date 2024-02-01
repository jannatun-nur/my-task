import { Link } from 'react-router-dom';
import logo from '../../public/assets/image/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../public/Provider/AuthProvider';
const Navbar = () => {

  const navlink = <>
  <Link to= "/"><button className='hover:text-white hover:bg-gray-800 text-xs lg:text-xl px-2 py-1 lg:px-4 lg:py-2 bg-white text-gray-800 font-bold'>Home</button></Link>
  </>
  const {user , logout} = useContext(AuthContext)
  return (
    <div>
      <header className="bg-white text-gray-800 w-full border border-black">
        <div className="flex justify-between">
          <div className="flex">
        <img className='h-10 w-10 lg:h-24 lg:w-24' src={logo} alt="" />
   
         
          </div>
        
          <div className="items-center flex-shrink-0 ">
          {navlink}
        
 {user?.email ? (
   
      <button onClick={logout} className="hover:text-white hover:bg-gray-800 text-xs lg:text-xl px-2 py-1 lg:px-4 lg:py-2 bg-white text-gray-800 font-bold lg:mt-4">LogOut</button>
   
 ) : (
    <button className=" text-xs lg:text-xl px-2 py-1 lg:px-4 lg:py-2 bg-white text-gray-800 font-bold"><Link to="/signin">Sign In</Link></button>
 )}
</div>
         
        </div>
      </header>
    </div>
  );
};

export default Navbar;
