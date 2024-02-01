import { useEffect } from "react";
import { useState } from "react";
import DynamicCard from "./DynamicCard";


const Category = () => {

    const [ item , setItem] = useState([]);

    useEffect( ()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    return (
        <div >
            <p className="text-xs lg:text-2xl mt-4 font-bold text-gray-800">Checkout our new update</p>
           <div className="columns-1 grid md:grid-cols-4 lg:grid-cols-3 gap-2 ">
           {
                item.map( items =><DynamicCard key={items._id} items={items}></DynamicCard>)
            }
            
           </div>
        </div>
    );
};

export default Category;