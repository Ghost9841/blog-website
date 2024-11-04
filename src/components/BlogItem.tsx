import Image from "next/image";
import { blog_data } from "@/assets/Assets/assets";

const BlogItem = () => {
  return (
    <div className="max-wi=-[330px] sm:max-w-[300px] bg-white border border-black 
    hover:shadow-[-7px_7px_0px_#661222]">
      <Image src={blog_data[0].image} alt="first" width = {400} height={400} className="border border-black"/>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">{blog_data[0].category}</p>
    </div>
  )
}

export default BlogItem;
