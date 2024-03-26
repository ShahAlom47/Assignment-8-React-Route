import { useEffect, useState } from "react";
import DisplayBlogCard from "./DisplayBlogCard";


const Blog = () => {

    const [blogDatas, setBlogDatas] = useState([])

    useEffect(() => {
        fetch('../BlogData.json')
            .then(res => res.json())
            .then(data => setBlogDatas(data.reviews))

    }, [])


    console.log(blogDatas);
    return (
        <div className=" ">
           {
            blogDatas.map((blog,index)=> <DisplayBlogCard key={index} blog={blog}></DisplayBlogCard>)
           }
        </div>
    );
};

export default Blog;