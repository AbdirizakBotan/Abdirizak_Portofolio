import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
  
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl text-center font-semibold mb-5">About <span>Me</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    I'm a Junior developer. I have learned full stack development, and I enjoy coding. I frequently work on various projects. I would like to work on website development, both front-end and back-end.
                    </p>
                </div>


        </div>
        <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl text-center font-semibold mb-5">Connect <span>Me</span></h3>
                    <div>
        <a href="https://mailto:cabdirisaaqbootaan1@gmail.com"><h1 className="text-lg font-semibold ">Email: cabdirisaaqbootaan1@gmail.com</h1></a>
        <a href="https://Wa.me/+252617296465"><h1 className="text-lg font-semibold">Phone: +252 617296465</h1></a>
    </div>
    <div className="flex mt-8 sm:ml-2 ml-2  gap-10">  
    <a href="https://github.com/AbdirizakBotan"><i class="fa-brands text-4xl pt-2 fa-github"></i></a>
   <a href="https://Wa.me/+252617296465"> <i class="fa-brands text-4xl pt-2 fa-whatsapp"></i></a>
    <a href="https://www.linkedin.com/in/abdirizak-botan-62204a345/"><i class="fa-brands text-4xl pt-2 fa-linkedin"></i></a>
    </div>
                </div>


        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact