
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { IoIosHeart } from "react-icons/io";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayDetailsCard = ({ detailsData }) => {

    const getLocalStoreData=(key)=>{

        const localDatas= localStorage.getItem(key);
        if(localDatas){
            return JSON.parse(localDatas);
        }
        return[];
    }

    const readBtnHandel =(id,key)=>{
        console.log(id);
        const localdata= getLocalStoreData(key)  
        
            const isExists = localdata.find(bId=>bId===id);
           if(!isExists){
            console.log(localdata);
            localdata.push(id);
            localStorage.setItem(key,JSON.stringify(localdata))
            toast("Successfully added to readlist")

           }
           else{
             toast.warn('This is already in the list', )
           }
   
    }
 
    const wishBtnHandel =(id,key)=>{
        console.log(id);
        const localdata= getLocalStoreData(key)  
        const readListLocalData= getLocalStoreData('readList')  

        
            const isExistsReadList = readListLocalData.find(bId=>bId===id);
            const isExists = localdata.find(bId=>bId===id);

           if(!isExists && !isExistsReadList){
            console.log(localdata);
            localdata.push(id);
            localStorage.setItem(key,JSON.stringify(localdata))
            toast("Successfully added to Wish list")

           }

           else if(!isExists){
            toast.warn('This is already read', )
           }
           else{
            //  toast("This is already in the list")
             toast.warn('This is already in the list', )
           }
   
    }

const [click,setClick]=useState(false);
    const favBtnHandel=(id,key)=>{

        setClick(!click)
        const localdata= getLocalStoreData(key)  
        
        const isExists = localdata.find(bId=>bId===id);
       if(!isExists){
        localdata.push(id);
        localStorage.setItem(key,JSON.stringify(localdata))
        toast("Successfully added to Favorite list")

       }
       else{
         toast.warn('This is already in the list', )
       }

    }

 

    const { bookId, image, bookName, author, tags, rating, category, yearOfPublishing, publisher, totalPages, review } = detailsData;
    console.log(tags)
   
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
                    
                    <p>{tags}</p>
                 
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
                <div className='my-5 flex'>
                <button onClick={()=>readBtnHandel(bookId,'readList')} className='btn btn-outline '>Read</button>
                <button onClick={()=>wishBtnHandel(bookId,'wishList')} className=" btn primary-Btn ml-4 " style={{ backgroundColor: '#59C6D2' }}>Wishlist</button>
                <button onClick={()=>favBtnHandel(bookId,'favList')} className="  ml-4 flex items-center  px-3 btn "  >{click?  <IoIosHeart /> :<CiHeart /> }  Add to Favorite</button>
                </div>
               
            </div>
            <ToastContainer />
           
        </div>
    );
};

export default DisplayDetailsCard;
DisplayDetailsCard.propTypes = {
    detailsData: PropTypes.object.isRequired
}