import { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from "./ReadBook";
import WishlistBook from "./WishlistBook";

const ListedBooks = () => {

    const getLocalStoreData=(key)=>{

        const localDatas= localStorage.getItem(key);
        if(localDatas){
            return JSON.parse(localDatas);
        }
        return[];
    }
   
    
    const [bookDatas, setBookDatas] = useState([])

    useEffect(() => {
        fetch('../bookCardData.json')
            .then(res => res.json())
            .then(data => setBookDatas(data))

    }, [])

const [sortData,setSortData]=useState([]);

useEffect(()=>{

    setSortData(bookDatas)
},[])
   

    const sortHandel=(sortBy)=>{

if(sortBy==='raiting'){

    bookDatas.sort(function(a, b){return a.rating -b.rating});
    setSortData(bookDatas)
}
else if(sortBy==='yearOfPublishing'){

    bookDatas.sort(function(a, b){return a.yearOfPublishing -b.yearOfPublishing});
    setSortData(bookDatas)
}
else if(sortBy==='totalPages'){

    bookDatas.sort(function(a, b){return a.totalPages -b.totalPages});
    setSortData(bookDatas)
}



    }

console.log(sortData);


    const localWishData= getLocalStoreData('wishList')
    const wishBookData = bookDatas.filter(data => localWishData.includes(data.bookId));


    const localReadData= getLocalStoreData('readList')
    const readBookData = bookDatas.filter(data => localReadData.includes(data.bookId));


   


    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="my-9">
            <div className="bg-gray-300 p-6 rounded-lg">
                <h1 className="text-center">Books</h1>
            </div>
            <div className="flex justify-center">
                <div className="dropdown p-6  mx-auto">
                    <div tabIndex={0} role="button" className="  primary-Btn m-1">Sort By &#8681;</div>

                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>sortHandel('raiting')}><a>Raiting</a></li>
                        <li  onClick={()=>sortHandel('yearOfPublishing')}><a>Year of Publishing</a></li>
                        <li  onClick={()=>sortHandel('totalPages')} ><a>Pages</a></li>
                    </ul>
                </div>

            </div>

            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab ><span className="font-semibold">Read Book</span></Tab>
                        <Tab ><span className="font-semibold">Wishlist Book</span></Tab>
                    </TabList>
                    <TabPanel> <ReadBook readBookData={readBookData}></ReadBook> </TabPanel>
                    <TabPanel> <WishlistBook wishBookData={wishBookData}  ></WishlistBook></TabPanel>
                </Tabs>


            </div>




        </div>
    );
};

export default ListedBooks;