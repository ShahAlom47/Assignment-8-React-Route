import { useEffect, useState } from "react";


const useGetdata = () => {
    const [bookDatas, setBookDatas] = useState([]);
 
    
    useEffect(() => {
        fetch('../bookCardData.json')
            .then(res => res.json())
            .then(data => {
                setBookDatas(data);
                // setSortData(data); 
            });
    }, []);
    
return  bookDatas ;
}
  

export default useGetdata;