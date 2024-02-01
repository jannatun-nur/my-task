import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../public/Provider/AuthProvider";


const Details = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleClick = (e) =>{
        e.preventDefault()

        if(user?.email){
            navigate('/ticket')
        }
        else{
            navigate('/signin')
        }
    }
    const items = useLoaderData()
    console.log(items);
    return (
        <div className="bg-white text-gray-800">
            <img className="mx-auto w-5/12 " src={items?.image.original} alt="" />
            <p className="lg:text-2xl text-xl font-bold ">{items?.name}</p>
            <p className="lg:text-xl text-xs font-serif">{items?.summary}</p>
            <p >{items?.webChennel}</p>
            <p>{items?.dvdCountry}</p>
            <p className="lg:text-xl text-xs font-semibold ">{items?.network.name}</p>
            <p>{items?.country?.code}</p>
            <p>{items?.country?.timezone}</p>
          
      
          <button 
          onClick={handleClick}
          className="text-xs lg:text-xl px-2 py-1 lg:px-4 lg:py-2 bg-gray-800 text-white font-bold my-4 rounded-md" >Book Ticket</button>
          
        </div>
    );
};

export default Details;