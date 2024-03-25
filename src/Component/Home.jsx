import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import DisplayBookCard from "./DisplayBookCard";
import { useEffect, useState } from "react";


const Home = () => {
    // const cardDatas = useLoaderData()
    const [cardDatas, setCardDatas] = useState([])

    useEffect(() => {
        fetch('bookCardData.json')
            .then(res => res.json())
            .then(data => setCardDatas(data))

    }, [])


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
            </section>
        </div>
    );
};

export default Home; Home