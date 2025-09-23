"use client";
import { motion } from "motion/react";
export default function AnimatedSubheading({subheading}:{subheading:string}){

    return (
         <div  className=" w-fit px-2 py-[2px] overflow-y-visible relative text-secondary  ">
             <motion.div initial={{opacity:0,filter:"blur(10x)"}} whileInView={{opacity:1,filter:"blur(0px)"}} transition={{delay:0.8,duration:0.5}} viewport={{once:true}}  className=" absolute top-0 left-0 w-full h-full bg-neutral-100 dark:bg-neutral-700  rounded-md"/>
             {subheading.split(" ").map((word, idx) => (
              <motion.span
                initial={{ opacity: 0,  filter: "blur(10px)" }}
                whileInView={{ opacity: 1,  filter: "blur(0px)" }}
                transition={{ delay: 0.1 + idx / 10 }}
                viewport={{once:true}}
                key={`${word}-${idx}`}
              >
                {word}&nbsp;
              </motion.span>
            ))}
           
           </div>
    )
    
}