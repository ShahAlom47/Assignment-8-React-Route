import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import DisplayBookCard from "./DisplayBookCard";
import DisplayDetailsCard from "./DisplayDetailsCard";

const BookDetails = () => {
    const { bookid } = useParams();
    

    const intBookId = parseInt(bookid);
  
    const [bookDatas, setBookDatas] = useState([])

    useEffect(() => {
        fetch('../bookCardData.json')
            .then(res => res.json())
            .then(data => setBookDatas(data))

    }, [])
 

    let detailsData = [];

    if (bookDatas.length > 0) {
        const bookData = bookDatas.find((data) => data.bookId === intBookId)
        detailsData = bookData;
    }


    console.log(detailsData);

    return (
        <div>
           <DisplayDetailsCard key={detailsData.bookId} detailsData={detailsData} > </DisplayDetailsCard>
        </div>
    );
};

export default BookDetails;