import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DisplayBookCard = ({ cardData }) => {

    const {bookId, image, bookName, author, tags, rating, category } = cardData;

    return (
        <Link className=''  to={`/bookDtails/${bookId}`}>
        <div className="card  bg-base-100 shadow-xl border-2 hover:border-2 hover:border-gray-500">
            <figure className="px-10 pt-10 h-[200px] rounded-xl">
                <img src={image} alt="Shoes" className="rounded-xl h-full" />
            </figure>
            
            <div className="card-body items-start  flex flex-col  ">
                <div className='flex gap-2 flex-wrap  justify-start '>
                    {
                        tags.map((tag)=> <p className='bg-gray-200 px-2 py-1 rounded-full  text-[#23BE0A] font-medium ' key={tag+1}>{tag}</p>)
                    }
                    
                </div>
               
                <h2 className="card-title font-bold">{bookName}</h2>
                <p className='text-start font-medium  text-gray-500 flex-1'>By :{author}</p>
                <div className='border-dotted  border-t-2 flex justify-between w-full pt-3 mt-3 font-medium'>
                    <p className=' text-gray-500'>{category}</p>
                    <p className='text-end text-gray-500 flex gap-2 items-center justify-end '>{rating} <FaRegStar></FaRegStar> </p>
                </div>
                
            </div>
        </div>
        </Link>
    );
};

export default DisplayBookCard;
DisplayBookCard.propTypes = {
cardData:PropTypes.object.isRequired
}