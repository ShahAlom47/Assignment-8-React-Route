import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DisplayFavBook = ({ book }) => {
    console.log(book);

    const { bookId, image, bookName, author, rating, category } = book;
    return (
        <div className="my-10">
            <div className="  flex-col lg:flex-row rounded-lg border-4 p-5 flex gap-2 lg:w-6/12 m-auto">

                <div className=" lg:w-3/12 lg:h-32 h-40 bg-slate-200 rounded-xl p-2 flex justify-center items-center ">
                    <img className="h-full rounded-xl" src={image} alt="" />

                </div>

                <div className="flex-1">
                    <h1 className="card-title"> {bookName}</h1>
                    <p className='text-start font-medium  text-gray-500 flex-1'>By :{author}</p>
                    <p className=' text-gray-500'>{category}</p>
                    <p className="text-black font-semibold  ">Rating: {rating}</p>
                </div>
                <div className="flex items-center">
                    <Link to={`/bookDtails/${bookId}`}><button className="primary-Btn pbtn my-auto  ">View Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default DisplayFavBook;
DisplayFavBook.propTypes = {
    book: PropTypes.object.isRequired
}