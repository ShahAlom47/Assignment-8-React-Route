import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" btn btn-ghost lg:hidden pl-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'} className='font-semibold text-gray-500 hover:bg-slate-200'>Home</NavLink></li>
                        <li><NavLink to={'/listedBook'} className='font-semibold text-gray-500 hover:bg-slate-200'>Listed Books</NavLink></li>
                        <li><NavLink to={'/pageRead'} className='font-semibold text-gray-500 hover:bg-slate-200 rounded-md'> Page to Read</NavLink></li>

                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl lg:text-3xl font-bold pl-0">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    <NavLink className='font-semibold text-gray-500 hover:bg-slate-200 rounded-md' to={'/'}>Home</NavLink>
                  <NavLink to={'/listedBook'} className='font-semibold hover:bg-slate-200 rounded-md text-gray-500'>Listed Books</NavLink>
                  <NavLink to={'/favorit'} className='font-semibold hover:bg-slate-200 rounded-md text-gray-500'>Favorite Book</NavLink>
                    <NavLink to={'/pageRead'} className='font-semibold text-gray-500 hover:bg-slate-200 rounded-md'> Page to Read</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="primary-Btn">Sign In</a>
                <a className="primary-Btn ml-4 " style={{ backgroundColor: '#59C6D2' }}>Sign up</a>  </div>
        </div>
    );
};

export default Navbar;