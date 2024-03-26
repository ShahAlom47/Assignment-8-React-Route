
import PropTypes from 'prop-types';
// import { useEffect, useState } from "react";
import DisplayReadCard from "./DisplayReadCard";


const WishlistBook = ({wishBookData}) => {

   


    if(wishBookData.length>0){
        return (
            <div>
               {
                wishBookData.map((data,indx)=><DisplayReadCard data={data} key={indx} ></DisplayReadCard>)
               }
            </div>
        )
    }

    return (
        <div className="text-center text-4xl">
           No Data Available
        </div>
    );
};

export default WishlistBook;
WishlistBook.propTypes = {
    wishBookData:PropTypes.array.isRequired
    }