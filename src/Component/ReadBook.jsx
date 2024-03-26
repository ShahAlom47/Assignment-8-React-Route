import { useEffect, useState } from "react";
import DisplayReadCard from "./DisplayReadCard";


const ReadBook = ({readBookData}) => {

    // const getLocalStoreData=(key)=>{

    //     const localDatas= localStorage.getItem(key);
    //     if(localDatas){
    //         return JSON.parse(localDatas);
    //     }
    //     return[];
    // }
    // const localReadData= getLocalStoreData('readList')
 
    // const [bookDatas, setBookDatas] = useState([])

    // useEffect(() => {
    //     fetch('../bookCardData.json')
    //         .then(res => res.json())
    //         .then(data => setBookDatas(data))

    // }, [])

    // const bookData = bookDatas.filter(data => localReadData.includes(data.bookId));



    if(readBookData.length>0){
        return (
            <div>
               {
                readBookData.map((data,indx)=><DisplayReadCard data={data} key={indx} ></DisplayReadCard>)
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

export default ReadBook;