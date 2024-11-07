import { blog_data } from "@/assets/Assets/assets";
import BlogItem from "./BlogItem";
import { useState } from "react";
import TransitionEffect from "./TransitionEffect";


const BlogList = () => {
    const [menu,setMenu] = useState("All");

  return (
    <div>
      <TransitionEffect/>
      <div className="flex justify-center gap-6 my-10">
        <button onClick={()=> setMenu('All')} 
        className={menu==="All"?`bg-black text-white py-1 px-4 rounded-sm`:""}>
            All</button>
        <button onClick={()=> setMenu('Puzzles')}
        className={menu==="Puzzles"?`bg-black text-white py-1 px-4 rounded-sm`:""}>
            Puzzles</button>
        <button onClick={()=> setMenu('Tournaments')}
        className={menu==="Tournaments"?`bg-black text-white py-1 px-4 rounded-sm`:""}>
            Tournaments</button>
        <button onClick={()=> setMenu('Events')}
        className={menu==="Events"?`bg-black text-white py-1 px-4 rounded-sm`:""}>
            Events</button>
        <button onClick={()=> setMenu('Social Media')}
        className={menu==="Social Media"?`bg-black text-white py-1 px-4 rounded-sm`:""}>
            Social Media</button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24
      ">{blog_data.filter((item)=> menu==="All"? true:item.category===menu).map((item,index)=>{
        return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category}/>
      })}</div>
    </div> 
  )
}

export default BlogList;
