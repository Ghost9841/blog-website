'use client'
import { blog_data } from "@/assets/Assets/assets";
import FooterButton from "@/components/FooterButton";
import NavBar from "@/components/Header";
import TransitionEffect from "@/components/TransitionEffect";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react"

interface BlogPageProps {
  params:Promise< {
    id: number,
  }>
}
interface BlogData {
  author_img: StaticImageData;
  title: string;
  author: string;
  image: StaticImageData;
  description: string;
}

const BlogPage = ({params}: BlogPageProps) => {
  
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href); 
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  const [data, getData] = useState<BlogData | null>(null);
  const fetchBlogData = async ()=> {
    for (let i = 0; i < blog_data.length; i++) {
     if (Number((await params).id)===blog_data[i].id) {
      getData(blog_data[i]);
      console.log(blog_data[i]);
      break;
     }
      
    }
  }
  useEffect(()=>{
    fetchBlogData();
  },)



  
  return (data?<>
    <div className="bg-gray-300 py-5 px-5 md:px-12 lg:px-28">
    <meta property="og:title" content="Blog Website" />
      <meta property="og:description" content="It is a website of Blogs of Chess Nepal" />
      <meta property="og:image" content={data.image.src} />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      <TransitionEffect/>
      <NavBar/>
      <div className="text-center my-24">
        <h1 className="text-3xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
        <Image src={data.author_img} width={60} height={60} alt="author image" className="mx-auto mt-6 border border-white rounded-full" />
        <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto sm:mx-auto mt-[-100px] mb-10">
        <Image src={data.image} alt="blog image" height={720} width={1200} className=" border-4 border-white" />
        <h1 className="my-8  text-[26px] font-semibold">Introduction:</h1>
        <p className="">{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">Step1: Self-Reflection and Goal </h3>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto? Enim maxime velit ex deleniti dolor ea eos dicta esse odio aperiam blanditiis dolores adipisci corrupti, consequuntur totam unde? Architecto.</p>
      
        <h3 className="my-5 text-[18px] font-semibold">Step2: Self-Reflection and Goal </h3>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto? Enim maxime velit ex deleniti dolor ea eos dicta esse odio aperiam blanditiis dolores adipisci corrupti, consequuntur totam unde? Architecto.</p>
    
        <h3 className="my-5 text-[18px] font-semibold">Conclusion: </h3>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto? Enim maxime velit ex deleniti dolor ea eos dicta esse odio aperiam blanditiis dolores adipisci corrupti, consequuntur totam unde? Architecto.</p>
      <div className="my-24">
          <p className="text-black font-semibold my-4">Share this article on social media</p>
          <div className="flex">
        <FooterButton/>
            <button onClick={copyToClipboard} className="bg-black text-white px-4 py-2 rounded-full ml-4">
      {copied ? "Copied!" : "Copy Link"}
    </button>
            </div> 
      </div>
      </div>
    </div>
    
  </>:<></>
  )
}

export default BlogPage