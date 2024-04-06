import { motion } from "framer-motion";

function Landing() {
  return (
    <div className="relative w-full h-[150vh] sm:h-[260vh]">
      <div  className="picture w-full h-full overflow-hidden">
        <img data-scroll data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        <div className="text  max-w-screen-xl h-full mx-auto px-5 sm:px-10 text-white">
          <div className="para mt-72   sm:mt-[18rem]">
            {[
              "Global digital design studio partnering",
              "with brands and businesses that create",
              "with brands and businesses that create",
              "exceptional experiences where people",
              "live, work, and unwind.",
            ].map((item, index) => {
              return (
                <p key={index} className="text-md sm:text-2xl  overflow-hidden">
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.8,
                      delay: index * 0.2,
                    }}
                    className="inline-block origin-left"
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings mt-8 sm:mt-10 ">
            {["Digital", "Design", "Experince"].map((item, index) => {
              return (
                <h1
                  key={index}
                  className="text-6xl sm:text-[14rem] font-lighter tracking-tighter leading-none py-1 sm:py-4 overflow-hidden"
                >
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.8,
                      delay: 1+index*.15
                    }}
                    className="inline-block origin-left"
                  >
                    {item}
                  </motion.span>
                </h1>
              );
            })}
          </div>
          <div className="para2 sm:w-1/3 mt-10 sm:mt-20">
            <p className="sm:text-xl">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
          </div>
          <a
            className=" sm:text-xl border-b-[.3px] sm:border-b-[1px] border-zinc-100 pb-1 inline-block mt-10"
            href="#"
          >
            The Studio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
