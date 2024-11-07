import Image, { StaticImageData } from "next/image";
import { assets, blog_data } from "@/assets/Assets/assets";
import Link from "next/link";
import TransitionEffect from "./TransitionEffect";

interface BlogItemProps{
  title: string
  description: string
  category: string
  image: StaticImageData
  id: number
  
}
const BlogItem = ({title,description,category,image,id}:BlogItemProps) => {
  return (
    
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black 
    hover:shadow-[-7px_7px_0px_#661222]">
      <TransitionEffect/>
      <Link href={`/blogs/${id}`}>
      {image ? (
        <Image src={image} alt="first" width={400} height={400} className="border border-black"/>
      ) : null}
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">{category}</p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-darklogo">{title}</h5>
        <p className="mb-3 text-sm tracking-tight text-darklogo">{description}</p>
        <Link href={`/blogs/${id}`}className="inline-flex items-center py-2 font-semibold text-center ">
          Read more <Image src={assets.arrow} alt="" className="ml-4 pt-1" width={12}/></Link>
      </div>
    </div>
  )
}

export default BlogItem;
