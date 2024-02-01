import { useContext, useState } from "react";
import { AuthContext } from "../../public/Provider/AuthProvider";
import Swal from "sweetalert2";


const BookForm = ({items}) => {
const {user} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const username = form.username.value;
        const email = form.email.value;
        console.log(name , username, email);


        if(user?.email){
            Swal.fire({
                title: "Congratrulation!!",
                text: "You have been booked ticket successfully",
                icon: "success"
              });
        }
    }
    const [movie, setMovie] = useState(items?.name || '');
    console.log(items);
    return (
        <div>
            <section className="p-6 bg-white text-gray-800 font-bold">
	<form  onSubmit={handleSubmit} className="container mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-white border border-black">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label 
                   
                    className="text-sm">Name</label>
					<input 
                   value={movie} 
                   name="name"
                    onChange={(e) => setMovie(e.target.value)}
                    id="firstname" type="text" className="w-full rounded-md focus:ring focus:ri focus:ri bg-white text-gray-800 border border-black lg:py-2 py-1" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Your name</label>
					<input 
                    name="username"
                    id="lastname" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ri focus:ri bg-white text-gray-800 border border-black lg:py-2 py-1" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Email</label>
					<input 
                    name="email"
                    id="email" type="email" placeholder="Valid email" className="w-full rounded-md focus:ring focus:ri focus:ri bg-white text-gray-800 border border-black lg:py-2 py-1" />
				</div>
			
				
			</div>
		</fieldset>
        <button 
        type="submit"
        className="px-2 py-1 lg:px-4 lg:py-2 bg-gray-800 text-white font-semibold my-2">Submit</button>
	</form>
  
</section>
        </div>
    );
};

export default BookForm;