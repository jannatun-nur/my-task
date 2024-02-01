import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
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
          
          <Link to='/ticket'>
          <button className="px-2 py-1 lg:px-4 lg:py-2 bg-gray-800 text-white font-bold my-4 rounded-md" >Book Ticket</button>
          </Link>
        </div>
    );
};

export default Details;