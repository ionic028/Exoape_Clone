import { motion } from "framer-motion"


function Footer() {
  return (
    <div className="w-full bg-black py-20 text-white">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10">
      <div className="text px-2 flex items-center justify-center sm:gap-12">
             <div className="">

              {["Our","Story"].map((item,i)=>{
                return <h1 key={i} className="capitalize text-5xl  sm:text-9xl font-light ">
                <motion.span
                    initial={{ rotate: 90, y: "40%", opacity: 0 }}
                    whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.64, 0, 0.78, 0],
                      duration: 1,
                    }}
                    className="inilne-block origin-left"
                  >
                    {item}
                  </motion.span>
                </h1>
              })}
             
             </div>
             <div className="">
                 <video autoPlay loop muted src="https://www.exoape.com/video/video-6.mp4"></video>
             </div>
          
             </div>
            <div className="px-2">
            <p className="w-3/2  sm:w-2/3  text-sm sm:text-xl leading-1 mt-9 sm:mt-14 opacity-60">The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
             <a className="border-b-[2px] border-zinc-500  mt-7 sm:mt-10 inline-block" href="#">OurStory</a>
             <div className="border-b-[2px] border-zinc-500  mt-7 sm:mt-10 " ></div>
            </div>
            <div className="px-2 mt-10 flex gap-40">
               <div className="flex flex-col gap-4">
                  <a href="#">Work</a>
                  <a href="#">Studio</a>
                  <a href="#">News</a>
                  <a href="#">Contact</a>   
               </div>
               <div className="flex flex-col gap-4">
                  <a href="#">Behance</a>
                  <a href="#">Dribbble</a>
                  <a href="#">Twitter</a>
                  <a href="#">Instagram</a>   
               </div>
            </div>
      </div>
    </div>
  );
}

export default Footer;
