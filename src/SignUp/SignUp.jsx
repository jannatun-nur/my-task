import { Link, useNavigate } from "react-router-dom";
import gif from "../../public/assets/image/signup.gif";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { useContext, useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../public/Provider/AuthProvider";
import app from "../../public/firebase/firebase.config";

const Signup = () => {

  const auth = getAuth(app);
  const navigate = useNavigate()
    
  const {createUser}=useContext(AuthContext)
  
  
  const [signupError , setSignupError] = useState('')
  const [succes,  setSucces] = useState('')

  const handleSignUp = (e) =>{
    e.preventDefault();
    

    const name = e.target.name.value;
    const address = e.target.address.value
   const email = e.target.email.value;
   const password = e.target.password.value;
   console.log(name, address, email ,password);



   createUser(email, password)
   .then(result =>{
       console.log(result.user);
   })
   .catch( error =>{
       console.error(error)
   })
   
       //    reset error
       setSignupError('');
       setSucces('')
   
       if(password.length <6){
           setSignupError('password is less than 8 characters')
           return
       }
       else if(!/[A-Z]/.test(password)){
        setSignupError('password do not have capital letter ');
        
        return;
      }
   
   createUserWithEmailAndPassword(auth, email, password)
   .then(result =>{
     console.log(result.user);
     setSucces()
     Swal.fire({
      position: "top-center",
      icon: "success",
      title: "You have created an account",
      showConfirmButton: false,
      timer: 1500
    });
   navigate('/signin')
   })
   .catch(error=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
     
    });
    setSignupError(error.message)
   })
  }
  return (
    <div className="lg:flex columns-1 lg:justify-around bg-white">
      <div className=" w-full lg:w-1/2 lg:mt-20 mt-32">
        <img src={gif} alt="" />
      </div>

      <div className="  mx-auto w-8/12 lg:w-1/2">
        <div className="mb-8 text-center">
          <p className="text-sm lg:text-2xl text-gray-800 font-bold">
            Sign Up to get access
          </p>
        </div>
        <form onSubmit={handleSignUp} className="">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2 text-white font-semibold">
                <label className="text-sm text-white font-semibold">Name</label>
              </div>
              <input
                type="Username"
                name="Username"
                id="Username"
                placeholder="Username"
                className="w-full px-2 lg:px-3  lg:py-2 rounded-md bg-white border border-black"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1 lg:mb-2 text-white font-semibold">
                <label className="text-sm">Address</label>
              </div>
              <input
                type="address"
                name="address"
                id="address"
                placeholder="address"
                className="w-full px-2 lg:px-3  lg:py-2 rounded-md bg-white border border-black"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-white font-semibold">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="@gmail.com"
                className="w-full px-2 lg:px-3  lg:py-2 rounded-md bg-white border border-black"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2 text-white font-semibold">
                <label className="text-sm">Confirm Password</label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-2 lg:px-3 lg:py-2 rounded-md bg-white border border-black"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="lg:w-full px-3 lg:px-8 py-1 lg:py-3 text-xs lg:text-xl  rounded-md text-white bg-gray-800 mt-2"
              >
                Sign Up
              </button>
            </div>
            <p className="px-3 lg:px-6 text-xs lg:text-sm text-center text-gray-800 font-serif">
              Already have accout?
              <Link to="/signin" className="text-xs lg:text-sm">Login Here</Link>
            </p>
          </div>
        </form>

        
        {
         signupError && <p className=" font-semibold text-red-500">{signupError}</p>
      }
      {
          succes && <p className="text-green-700  font-semibold">{succes}</p>
      }
      </div>
    </div>
  );
};

export default Signup;
