import banner from '../../public/assets/image/banner.gif'

const Banner = () => {
  return (
    <div className=" my-2 bg-white text-gray-800">
      <div className="columns-1 lg:flex lg:justify-between">
        
         <div>
         <img
            src={banner}
            className="max-w-sm rounded-lg"
          />
         </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">Is It Weekend!!</h1>
            <p className="py-6 text-xs lg:text-xl font-semibold">
              What is your plan for this weekend??? Let us help 
              you to make your weekend more enjoyfull and cheerable.
              Let's start the journey with us.
            </p>
            <button className="btn btn-ghost">Let's Go</button>
          </div>
        </div>
      </div>
    
  );
};

export default Banner;
