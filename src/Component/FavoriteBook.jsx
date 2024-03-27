import DisplayFavBook from "./DisplayFavBook";
import useGetdata from "./coustumHock";


const FavoriteBook = () => {

    const getLocalStoreData = (key) => {

        const localDatas = localStorage.getItem(key);
        if (localDatas) {
            return JSON.parse(localDatas);
        }
        return [];
    }

    const LocalSdata = getLocalStoreData('favList')
   
    const datas = useGetdata();

    const readBookDat = datas.filter(data => LocalSdata.includes(data.bookId));
    if(readBookDat.length <= 0){
      
        return (
            <div className="text-2xl text-center font-bold py-6">
               No book added
            </div>
        )
    }
   
   
    return (
        <div>
            {
                readBookDat.map((book,indx)=> <DisplayFavBook book={book} key={indx}></DisplayFavBook>)
            }
        </div>
    );
};

export default FavoriteBook;