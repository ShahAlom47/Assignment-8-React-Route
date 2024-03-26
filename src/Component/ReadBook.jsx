
import DisplayReadCard from "./DisplayReadCard";
import PropTypes from 'prop-types';


const ReadBook = ({readBookData}) => {

    if(readBookData.length>0){
        return (
            <div>
               {
                readBookData.map((data,indx)=><DisplayReadCard data={data} key={indx} ></DisplayReadCard>)
               }
            </div>
        )
    }

    return (
        <div className="text-center text-4xl">
           No Data Available
        </div>
    );
};

export default ReadBook;
ReadBook.propTypes = {
    readBookData:PropTypes.object.isRequired
    }