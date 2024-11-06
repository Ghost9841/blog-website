'use client'
import { assets, blog_data } from "@/assets/Assets/assets";
import NavBar from "@/components/Header";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react"

interface BlogPageProps {
  params: {
    id: number,
  }
}
interface BlogData {
  author_img: StaticImageData;
  title: string;
  author: string;
  image: StaticImageData;
}

const BlogPage = ({params}: BlogPageProps) => {
  const [data, getData] = useState<BlogData | null>(null);
  const fetchBlogData = ()=> {
    for (let i = 0; i < blog_data.length; i++) {
     if (Number(params.id)===blog_data[i].id) {
      getData(blog_data[i]);
      console.log(blog_data[i]);
      break;
     }
      
    }
  }
  useEffect(()=>{
    fetchBlogData();
  },[])
  return (data?<>
    <div className="bg-gray-300 py-5 px-5 md:px-12 lg:px-28">
      <NavBar/>
      <div className="text-center my-24">
        <h1 className="text-3xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
        <Image src={data.author_img} width={60} height={60} alt="author image" className="mx-auto mt-6 border border-white rounded-full" />
        <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto sm:mx-auto mt-[-100px] mb-10">
        <Image src={data.image} alt="blog image" height={720} width={1200} className=" border-4 border-white" />
      </div>
    </div>
  </>:<></>
  )
}

export default BlogPage
