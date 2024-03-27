import Banner from "./Banner";

import DisplayBookCard from "./DisplayBookCard";
import { useEffect, useState } from "react";


const Home = () => {
    // const cardDatas = useLoaderData()
    const [cardDatas, setCardDatas] = useState([])
    const [getData,setGetData]=useState([])
    const [isMore,setMore]=useState(false);

    useEffect(() => {
        fetch('bookCardData.json')
            .then(res => res.json())
            .then(data => setGetData(data))

    }, [])

 useEffect(()=>{

    cardDatas.length<6?  setMore(true): setMore(false)
    const xx= getData.slice(0,6)
    setCardDatas(xx)

 },[getData])

    const seeMoreHandel=()=>{
        setMore(!isMore)
        setCardDatas(getData)


    }

console.log(getData);
    return (
        <div className="my-5">
            <Banner></Banner>
            <section className="BooksCardContainer my-10 ">
            <h1 className="text-3xl font-bold text-center mb-7">Books</h1>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                   
               
                {
                    cardDatas.map(data => <DisplayBookCard key={data.bookId} cardData={data} ></DisplayBookCard>)
                }
                 </div>
                 <div className={`flex justify-center items-center p-5 ${isMore? 'hidden':''} ` } >

                 <button onClick={seeMoreHandel} className="btn primary-Btn ">See More</button>
                 </div>
            </section>
        </div>
    );
};

export default Home; Home