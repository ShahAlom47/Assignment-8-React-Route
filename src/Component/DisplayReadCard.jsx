
import { CiLocationOn } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DisplayReadCard = ({data}) => {
  
    const { bookId, image, bookName, author, tags, rating, category, yearOfPublishing, publisher, totalPages,  } = data;
  
    return (
        <div>
             <div className="flex bg-base-100 shadow-xl my-10 p-4">
            <figure className='w-4/1 '><img className='rounded-lg' src={image} alt="Movie" /></figure>
            <div className=" flex flex-col space-y-3 p-6">
                <h2 className="card-title">{bookName}</h2>
                <p className='text-start font-medium  text-gray-500 flex-1'>By :{author}</p>
               
                <div className='lg:flex gap-5  flex-wrap justify-start'>
                    <p className="text-black font-semibold">Tags: <span className="font-normal text-gray-500">{tags}</span></p>
                    
                    <p className="font-medium text-gray-500 flex items-center gap-2"><span><CiLocationOn /></span> Year of Publishing: 1924 {yearOfPublishing}</p>
                 
                </div>

                <div className='lg:flex gap-5  flex-wrap justify-start'>
                    <p className="font-medium text-gray-500 flex items-center gap-2"> <span><IoMdContacts /></span>Publisher: {publisher} </p>
                    <p className="font-medium text-gray-500 flex items-center gap-2"> <span><RiPagesLine  /></span>Pages: {totalPages} </p>

                </div>
                   
                <hr />



               <div className="py-5  flex items-center gap-4">
               <h2 className=" p-3 font-semibold text-[#1075f1ea] bg-[#328EFF26] rounded-full inline"> Category : {category}</h2>
               <h2 className=" p-3 font-semibold text-[#bc8127] bg-[#FFAC3326] rounded-full inline"> Rating : {rating}</h2>
               <Link to={`/bookDtails/${bookId}`}><button className="primary-Btn pbtn  ">View Details</button></Link>           
               </div>
              
               
            </div>
          
           
        </div>
            
        </div>
    );
};

export default DisplayReadCard;
DisplayReadCard.propTypes = {
    data: PropTypes.object.isRequired
}