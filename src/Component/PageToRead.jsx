import { useEffect, useState } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Cell, Legend, Bar } from 'recharts';
import PropTypes from 'prop-types';
import { RiH1 } from 'react-icons/ri';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#00C49F', '#FF8042'];


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
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
 
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    

   if(localReadData.length<=0){
    return(
        <h1 className='text-2xl font-semibold text-center my-7'>No book added</h1>
    )
   }
    return (
        <div className='flex justify-center py-9 bg-slate-200 rounded-lg my-5'>

            <BarChart
                width={700}
                height={400}
                data={readBookDat}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip></Tooltip>
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {readBookDat.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>

        </div>
    );
   

};


export default PageToRead;

    
