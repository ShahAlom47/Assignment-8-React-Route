import { useState } from "react";
import PropTypes from 'prop-types';

const DisplayBlogCard = ({ blog }) => {
    const { title, author, rating, review, genre, date_published } = blog;

    const [read,setrRead]=useState(false);

    const handelReadBtn = ()=>{
        setrRead(!read);

    }
    return (
        <div>
            <div className="card mb-8 bg-gray-100 border-4 shadow-2xl lg:w-8/12 m-auto">
                <div className=" space-y-1 p-5">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-gray-600 font-semibold">Author : {author}</p>
                    <div className="flex flex-col  justify-start  py-4">
                        <p className="  tex-gray-500 font-medium inline">{genre}</p>
                        <p className="font-semibold"> Rating : {rating}</p>
                        <p className="font-semibold"> Rating : {date_published}</p>
                    </div>
                    <p>{read? review: (review.slice(0,100))}{' '} <button onClick={handelReadBtn} className="btn btn-link">{read?'Read Less':"Read More"}</button> </p>
                   
                </div>
            </div>

        </div>
    );
};

export default DisplayBlogCard;
DisplayBlogCard.propTypes = {
    blog:PropTypes.object.isRequired
    }