import { useEffect, useState } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';



const PageToRead = () => {

    const getLocalStoreData = (key) => {

        const localDatas = localStorage.getItem(key);
        if (localDatas) {
            return JSON.parse(localDatas);
        }
        return [];
    }
    const [bookDatas, setBookDatas] = useState([]);

    useEffect(() => {
        fetch('../bookCardData.json')
            .then(res => res.json())
            .then(data => {
                setBookDatas(data);
                // setSortData(data); 
            });
    }, []);

    const localReadData = getLocalStoreData('readList')
    const readBookDat = bookDatas.filter(data => localReadData.includes(data.bookId));

    console.log(readBookDat);
    return (
        <div  className='flex justify-center py-9'>
            <BarChart width={830} height={450} data={readBookDat}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='bookName' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalPages" fill="#8884d8" />

            </BarChart>

        </div>
    );
};

export default PageToRead;