import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const {bookid}= useParams();
    const intBookId= parseInt(bookid);
    const bookDatas= useLoaderData();
    const[  detailsData,setDetailsData]=useState([]);

    const bookData=bookDatas.find((data)=>data.bookId===intBookId )
    // const bookData=bookDatas.find((data)=>console.log(data.bookId,bookid) )

    // console.log( intBookId);
    console.log(bookData);

    // useEffect(()=>{

    //     if(bookDatas.length>0){
    //         const bookData=bookDatas.find((data)=>data.bookId===bookid )
    //         setDetailsData(bookData)
    //     }
    
    // },[bookid])
    
  

   
   
    // 
    return (
        <div>
            book details
        </div>
    );
};

export default BookDetails;