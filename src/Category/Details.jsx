import { useLoaderData } from "react-router-dom";


const Details = () => {
    const items = useLoaderData()
    console.log(items);
    return (
        <div>
            <p>{items?.name}</p>
        </div>
    );
};

export default Details;