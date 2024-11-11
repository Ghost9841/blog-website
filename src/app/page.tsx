'use client'
import BlogList from "@/components/BlogList"
import Header from "@/components/Header"
import TransitionEffect from "@/components/TransitionEffect"


const Home = () => {
  return (
    <div>
     <Header/>
     <TransitionEffect/>
     <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
      
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Veniam inventore eos necessitatibus? Quae doloremque placeat voluptatum expedita? Officia consectetur quo nemo eveniet labore tempora voluptates vel eaque. Provident, reiciendis modi?</p>
     <form action="" className="flex justify-between max-w-[500px] scale-100 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_black]">
        <input type="email" placeholder="Enter your @email"className="pl-4 outline-none" />
        <button type='submit' className="border-l border-black py-4 px-4 sm:px-8 active:bg-red-600 active:text-white">Subscribe</button>
     </form>
      </div>
    <BlogList/>
    </div>
  )
}

export default Home
