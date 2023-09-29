
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdateInfo = () => {
    const loadData = useLoaderData();
    console.log(loadData)
    const [review, setReview] = useState(loadData);
    const handleUpdate = event => {
        event.preventDefault();
        fetch(`https://student-info-server-2er3iek2e-robin355.vercel.app/update/${loadData?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review Updated')
                    console.log(data);
                }

            })
        }
        

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }
    return (
        <div>
             <form onSubmit={handleUpdate}>
<h2 className='text-3xl text-center m-3 text-orange-600'>Please Input Student information:</h2>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
<input name='Roll' onChange={handleInputChange}  defaultValue={loadData?.Roll} type="text" placeholder="Your Roll" className="input input-bordered w-full " />
<input name='name' onChange={handleInputChange} defaultValue={loadData?.name} type="text" placeholder="Your Name" className="input input-bordered w-full " />
<input name='clases' onChange={handleInputChange} defaultValue={loadData?.clases} type="text" placeholder="Your Class" className="input input-bordered w-full " />
<input name='section' onChange={handleInputChange} defaultValue={loadData?.section} type="text" placeholder="Your Section" className="input input-bordered w-full " />
<input name='address' onChange={handleInputChange} defaultValue={loadData?.address} type="text" placeholder="Your Address" className="input input-bordered w-full " />
<input name='mobile' onChange={handleInputChange} defaultValue={loadData?.mobile}  type="text" placeholder="Your Mobile Number" className="input input-bordered w-full " />
<input name='email' onChange={handleInputChange} defaultValue={loadData?.email} type="text" placeholder="Your Email" className="input input-bordered w-full " />    
</div>
<input className='btn btn-outline btn-error m-3' type="submit" value="Update Information" />
</form> 
        </div>
    );
            }
export default UpdateInfo;