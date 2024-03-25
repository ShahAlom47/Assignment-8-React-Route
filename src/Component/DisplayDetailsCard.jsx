import PropTypes from 'prop-types';

const DisplayDetailsCard = ({ detailsData }) => {

    const { bookId, image, bookName, author, tags, rating, category, yearOfPublishing, publisher, totalPages, review } = detailsData;

    console.log(bookId);
    return (
        <div className="flex bg-base-100 shadow-xl my-10 p-4">
            <figure className='w-4/1 '><img className='rounded-lg' src={image} alt="Movie" /></figure>
            <div className=" flex flex-col space-y-3 p-6">
                <h2 className="card-title">{bookName}</h2>
                <p className='text-start font-medium  text-gray-500 flex-1'>By :{author}</p>
                <hr />
                <p className=' text-gray-500'>{category}</p>
                <hr />
                <p className=' text-gray-500'><span className="text-black font-semibold">Review :</span> {review}</p>

                <div className='flex gap-3 flex-wrap justify-start'>
                    <p className="text-black font-semibold">Tags:</p>
                    {
                        // tags.map((tag) => <p className='bg-gray-200 px-2 py-1 rounded-full  text-[#23BE0A] font-medium ' key={tag + 1}>{tag}</p>)
                    }
                </div>
                <hr />
                <div className='my-4'>
                <div className=' flex'>
                    <p className=' text-gray-500 w-4/12 ' > Number Of Pages : </p>
                    <p className="text-black font-semibold ">{totalPages}</p>
                </div>
                <div className=' flex'>
                    <p className=' text-gray-500 w-4/12 ' > Publisher : </p>
                    <p className="text-black font-semibold ">{publisher}</p>
                </div>
                <div className=' flex'>
                    <p className=' text-gray-500 w-4/12' > Year Of Publishing : </p>
                    <p className="text-black font-semibold  ">{yearOfPublishing}</p>
                </div>
                <div className=' flex'>
                    <p className=' text-gray-500 w-4/12 ' > Raiting : </p>
                    <p className="text-black font-semibold  ">{rating}</p>
                </div>
                </div>
                <div className='my-5'>
                <button className='btn btn-outline '>Read</button>
                <button className=" btn primary-Btn ml-4 " style={{ backgroundColor: '#59C6D2' }}>Wishlist</button>
                </div>
               
            </div>
           
           
        </div>
    );
};

export default DisplayDetailsCard;
DisplayDetailsCard.propTypes = {
    detailsData: PropTypes.object.isRequired
}