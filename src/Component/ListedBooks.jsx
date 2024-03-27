import { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from "./ReadBook";
import WishlistBook from "./WishlistBook";

const ListedBooks = () => {

    const getLocalStoreData = (key) => {

        const localDatas = localStorage.getItem(key);
        if (localDatas) {
            return JSON.parse(localDatas);
        }
        return [];
    }


    const [bookDatas, setBookDatas] = useState([]);
const [readBookData, setSortData] = useState([]); 
const [wishBookData, setWishData] = useState([]); 

useEffect(() => {
    fetch('../bookCardData.json')
        .then(res => res.json())
        .then(data => {
            setBookDatas(data);
            // setSortData(data); 
        });
}, []);


    const localWishData = getLocalStoreData('wishList')
    const wishBookDat = bookDatas.filter(data => localWishData.includes(data.bookId));


    const localReadData = getLocalStoreData('readList')
    const readBookDat = bookDatas.filter(data => localReadData.includes(data.bookId));
    useEffect(()=>{
        setSortData(readBookDat); 
        setWishData(wishBookDat)
    },[bookDatas])


    const sortHandel = (sortBy) => {
       
       
        if (sortBy === 'raiting') {

            const dataR=[...readBookDat]
            const dataW=[...wishBookDat]
            dataR.sort(function (a, b) { return a.rating - b.rating });
            dataW.sort(function (a, b) { return a.rating - b.rating });
           
           setSortData(dataR)
           setWishData(dataW)
        }
        else if (sortBy === 'yearOfPublishing') {
            const dataR=[...readBookDat]
            const dataW=[...wishBookDat]
            dataR.sort(function (a, b) { return a.yearOfPublishing - b.yearOfPublishing });
            dataW.sort(function (a, b) { return a.yearOfPublishing - b.yearOfPublishing });
            setSortData(dataR)
            setWishData(dataW)
        }
        else if (sortBy === 'totalPages') {
            const dataR=[...readBookDat]
            const dataW=[...wishBookDat]
            dataR.sort(function (a, b) { return a.totalPages - b.totalPages });
            dataW.sort(function (a, b) { return a.totalPages - b.totalPages });
            // console.log(data);
            setSortData(dataR)
            setWishData(dataW)
        }
    }

    console.log(readBookData);




    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="my-9">
            <div className="bg-gray-300 p-6 rounded-lg">
                <h1 className="text-center font-bold text-3xl">Books</h1>
            </div>
            <div className="flex justify-center">
                <div className="dropdown my-6  mx-auto bg-gray-100">
                    <div tabIndex={0} role="button" className=" text-center primary-Btn  w-52">Sort By &#8681;</div>

                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 rounded-box border-2 justify-center items-center w-52">
                        <li onClick={() => sortHandel('raiting')}><a>Raiting</a></li>
                        <li onClick={() => sortHandel('yearOfPublishing')}><a>Year of Publishing</a></li>
                        <li onClick={() => sortHandel('totalPages')} ><a>Pages</a></li>
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