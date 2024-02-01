import { useLoaderData } from "react-router-dom";


const Details = () => {
    const items = useLoaderData()
    return (
        <div>
            <p>{items?.show?.name}</p>
        </div>
    );
};

export default Details;