import React from 'react';
import project1 from "../assets/project1.png"
import Project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project2 from "../assets/project2.png"
import project5 from "../assets/project5.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "This project is just a frontend It's a responsive website, I built it with html css and Js, it's very beautiful and eye-catching",
      links: {
        site: "https://abdirizakbotan.github.io/Frontend-Project/",
        github: "https://github.com/AbdirizakBotan/Frontend-Project",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "This project is just a frontend, It's a responsive website but it does a lot of work like I do with React State",
      links: {
        site: "https://tasbih-app-correct.vercel.app/",
        github: "https://github.com/AbdirizakBotan/TasbihApp",
      },
    },
    {
      img: Project3,
      title: "Project3",
      description: "This project is just a frontend, It's a responsive website but it does a lot of work like I do with React State",
      links: {
        site: "https://somali-qouotes.vercel.app/",
        github: "https://github.com/AbdirizakBotan/SomaliQouotes",
      },
    },
    {
      img: project4,
      title: "Project #4",
      description: "This project is full-stack and has two parts: a public part (website) and a private part (dashboard) which works as a Student Exam Complaint management system.",
      links: {
        site: "https://frontend-woad-pi-24.vercel.app/",
        github: "https://github.com/AbdirizakBotan/Student_frontend",
      },
    },
    {
      img: project5,
      title: "Project #5",
      description: "This project is full-stack Note Taking App.",
      links: {
        site: "https://notefrontend-side.vercel.app/",
        github: "https://github.com/AbdirizakBotan/Frontend-Note",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio