import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from "./ReadBook";
import WishlistBook from "./WishlistBook";

const ListedBooks = () => {
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
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>

            </div>

            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab ><span className="font-semibold">Read Book</span></Tab>
                        <Tab ><span className="font-semibold">Wishlist Book</span></Tab>
                    </TabList>
                    <TabPanel> <ReadBook></ReadBook> </TabPanel>
                    <TabPanel> <WishlistBook></WishlistBook></TabPanel>
                </Tabs>


            </div>




        </div>
    );
};

export default ListedBooks;