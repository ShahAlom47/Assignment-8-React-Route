import { Link } from "react-router-dom";


const DisplayFavBook = ({ book }) => {
    console.log(book);

    const { bookId, image, bookName, author, tags, rating, category } = book;
    return (
        <div className="my-10">
            <div className=" rounded-lg border-4 p-5 flex gap-2 w-6/12 m-auto">

                <div className="w-3/1 h-32">
                    <img className="h-full" src={image} alt="" />

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