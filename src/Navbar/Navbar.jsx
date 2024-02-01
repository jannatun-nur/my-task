import { Link } from 'react-router-dom';
import logo from '../../public/assets/image/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../public/Provider/AuthProvider';
const Navbar = () => {
  const {user , logout} = useContext(AuthContext)
  return (
    <div>
      <header className="p-4 bg-white text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex">
        <img src={logo} alt="" />
   
         
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
 {user?.email ? (
    <li className="px-2 flex">
      <button onClick={logout} className="bg-white text-gray-800 font-bold">LogOut</button>
    </li>
 ) : (
    <button className="bg-white text-gray-800 font-bold"><Link to="/signin">Sign In</Link></button>
 )}
</div>
         
        </div>
      </header>
    </div>
  );
};

export default Navbar;
