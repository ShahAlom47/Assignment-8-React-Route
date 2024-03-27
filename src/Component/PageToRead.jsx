import { useEffect, useState } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Cell, Legend, Bar } from 'recharts';
import PropTypes from 'prop-types';


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
    

    // console.log(props);
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

    


// =========
// import React from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// const data = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];

// const getPath = (x, y, width, height) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
// };

// const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props;

//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

// export default function App() {
//     return (
//         <BarChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//                 top: 20,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
//             }}
//         >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//                 {data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//                 ))}
//             </Bar>
//         </BarChart>
//     );
// }

// App.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
