import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero  bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse lg:px-32">
                    <img src="https://i.ibb.co/SsMxg0F/pngwing-1.png" alt="" />

                    <div>
                        <h1 className="text-5xl font-bold mb-11">Books to freshen up your bookshelf</h1>
                        <Link to={'/listedBook'}><button className="primary-Btn ">View The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;