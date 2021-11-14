import {useState,useEffect}  from 'react';
import useAuth from "../../hooks/useAuth";
const ReviweShow = () => {
    const [review,setReview]=useState([]);
    const { user } = useAuth();

    useEffect(()=>{
        fetch(`https://fast-bastion-56494.herokuapp.com/addSReview`)
        .then(res=>res.json())
        .then(data=>setReview(data))
        
        
            },[])
            
    return (
        <div >
           <div className="mt-5">
           <h1 className="text-danger">Customers Review</h1>
           <div className="text-primary">
           {
            review.map(reviews=><div>
                <h5>Email : {reviews.email}</h5>
                <br />
               <h6>Review :  {reviews.Comments}</h6>
                <br /><br />
            </div>)   
           }
           </div>
           </div>
        </div>
    );
};

export default ReviweShow;