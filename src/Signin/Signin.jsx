

import { Link, useNavigate } from "react-router-dom";
import gif from '../../public/assets/image/signin (1).gif'
import { useContext, useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Swal from "sweetalert2";
import { AuthContext } from "../../public/Provider/AuthProvider";
import app from "../../public/firebase/firebase.config";

const Signin = () => {

    const {signInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const auth = getAuth(app);
    // const googleProvider = new GoogleAuthProvider();
  
    const [signinError, setSigninError] = useState("");
    const [succes, setSucces] = useState("");
    const [user , setUser] = useState(null)

    const handleSignin = (e) => {
        e.preventDefault();
    
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    
        signInUser(email,password)
        .then(result =>{
          console.log(result);
        })
        .catch(error =>{
          console.error(error)
        })
    
        //    reset error
        setSigninError("");
        setSucces("");
    
        if (password.length < 6) {
          setSigninError("password is less than 8 characters");
          return;
        } else if (!/[A-Z]/.test(password)) {
          setSigninError("password do not have a capital letter");
          return;
        }
    
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
            setSucces();
            Swal.fire({
              title: "Wonderfull!!",
              text: "You're logged in successfully",
              icon: "success",
            });
            navigate('/')
          })
          .catch((error) => {
            console.log(error);
            setSigninError(error.message);
          });
        }
    
    return (
        <div className="columns-1 lg:flex lg:justify-around bg-white">
        <div className="w-full lg:w-1/2 mt-32 lg:mt-20 ">
          <img src={gif} alt="" />
        </div>
  
        <div className="w-8/12 mx-auto lg:w-1/2">
          <div className="mb-8 text-center">
            <p className="text-sm lg:text-2xl text-gray-800 font-bold">
              Sign In Here
            </p>
          </div>
          <form onSubmit={handleSignin} className="">
            <div className="">
             
              <div>
                <label className="block lg:mb-2 text-xs lg:text-sm text-white font-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="@gmail.com"
                  className="w-full lg:px-3 px-1 lg:py-2 rounded-md border border-black bg-white"
                />
              </div>
              <div>
                <div className="flex justify-between lg:mb-2 text-white font-semibold">
                  <label className="text-sm">Confirm Password</label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full lg:px-3 px-1 lg:py-2 rounded-md border border-black bg-white"></input>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-28 lg:w-full lg:px-8 py-1 lg:py-3 text-xs lg:text-xl rounded-md bg-gray-800 text-white  mt-2"
                >
                  Sign In
                </button>
              </div>
              <p className="px-1 lg:px-6 text-xs lg:text-sm text-center text-gray-800 font-serif">
                Do not have account??
                 <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </form>
  
          
          {
           signinError && <p className=" font-semibold text-red-500">{signinError}</p>
        }
        {
            succes && <p className="text-green-700  font-semibol">{succes}</p>
        }
        </div>
      </div>
    );
};

export default Signin;