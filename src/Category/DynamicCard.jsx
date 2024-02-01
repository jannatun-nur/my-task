import { CiGlobe } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const DynamicCard = ({ items }) => {

  const { show } = items;


  return (
    <div>
      <div className="w-[200px] bg-gray-400 lg:w-full  text-white columns-1 lg:flex lg:justify-around rounded-lg">
        <section>
          <img className="lg:w-[200px] lg:h-[200px]" src={show?.image?.original} alt="" />

          <div className="flex gap-5 text-gray-800 font-semibold">
            <p className="flex">
              <span className="lg:text-xl text-gray-800 py-1"><CiClock2 /></span>
              <p className="text-gray-800">{show?.schedule.time}</p>
            </p>
            <p>{show?.schedule.days}</p>
            <a className="lg:text-2xl text-gray-800" href={show?.officialSite}><CiGlobe /></a>
          </div>
         
          <Link to={`/get-one/${show?.id}`}>
          
          <button  
          className="px-2 lg:px-4 lg:py-2 border border-gray-800 text-gray-800 font-bold my-2 ">View Details</button>
          </Link>
          
        </section>

        <section className="flex flex-col text-left">
          <p><span className="text-gray-800 font-bold">Name:</span> {show?.name}</p>
          <p><span className="text-gray-800 font-semibold">Type:</span> {show?.type}</p>
          <p><span className="text-gray-800 font-semibold">Language:</span> {show?.language}</p>
          <p><span className="text-gray-800 font-semibold">Genres:</span> {show?.genres}</p>
          <p><span className="text-gray-800 font-semibold">Run time:</span> {show?.runtime}</p>
          <p><span className="text-gray-800 font-semibold">Average Runtime:</span> {show?.averageRuntime}</p>
          <p><span className="text-gray-800 font-semibold">Premiered:</span> {show?.premiered}</p>
          <p><span className="text-gray-800 font-semibold">Ended:</span> {show?.ended}</p>
          <p><span className="text-gray-800 font-semibold">Status:</span> {show?.status}</p>

          
        </section>
      
      </div>
    </div>
  );
};

export default DynamicCard;
