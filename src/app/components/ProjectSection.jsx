"use client";
import React, {useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {animate, motion , useInView} from 'framer-motion';

const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "This is a portfolio website. It has details related to my skills & projects. It uses Tailwind CSS & Next JS.",
      image: "/images/project1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/harshwardhan5/Portfolio-website/tree/main",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "CONVO GENiUS",
      description: "Developed a modern Python-based chatbot using NLTK to enhance user interaction and experience. ",
      image: "/images/project2.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/harshwardhan5/ConvoGENiUS/tree/main",
      previewUrl: "https://colab.research.google.com/drive/1KiEgzdh5kekahyE2PgAEp8uPMJAMf4w4?usp=sharing",
    },
    {
      id: 3,
      title: "Traffic-Estimation-Project",
      description: "Developed a project for traffic density estimation using the YOLOv8 object detection model to analyze vehicle numbers in traffic videos.",
      image: "/images/project3.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/harshwardhan5/Traffic-Density-Estimation-Project-",
      previewUrl: "https://github.com/harshwardhan5/Traffic-Density-Estimation-Project-",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Sample Mobile App Coming soon...",
      image: "/images/project4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Google Gemini Clone ",
      description: "Developed a React-based application replicating the user interface of Google Gemini. The app interacts with the Google Gemini API to fetch and display responses.",
      image: "/images/project5.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/harshwardhan5/gemini0-clone",
      previewUrl: "https://gemini0-clone-25bshnf4h-kumar-harshwardhans-projects.vercel.app/",
    },
    {
      id: 6,
      title: "We Watch",
      description: "WeWatch is a real-time co-watching platform built with SvelteKit, using Socket.io for video sync, VimeJS for playback, and Prisma ORM with PostgreSQL for robust backend data management. It lets users create rooms to stream content together, perfectly in sync.",
      image: "/images/project6.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/harshwardhan5/weWatch",
      previewUrl: "https://github.com/harshwardhan5/weWatch",
    },
     {
      id: 7,
      title: "ByteUrBits",
      description: "Reduce Your Bits is a React.js web app that visualizes Huffman encoding using React Mermaid, showcasing how data can be compressed efficiently through optimal character encoding.",
      image: "/images/project7.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/harshwardhan5/ByteUrBits",
      previewUrl: "https://byte-ur-bits.vercel.app/",
    },
  ];


const ProjectSection = () => {
    const [tag, setTag] = useState('All');

    const ref = useRef(null);
    const isInView = useInView(ref, {once : true });


    const handleTagChange = (newTag) => {setTag(newTag)};

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

    const cardVariants = {
      initial : {y : 50, opacity : 0}, 
      animate : {y : 0, opacity : 1 },
    }

  return (
    <section id = "projects" >
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>

        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name='All' isSelected={tag=="All"}/>
            <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag=="Web"}/>
            <ProjectTag onClick={handleTagChange} name='Mobile' isSelected={tag=="Mobile"}/>
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project , index) => (
              <motion.li 
              key = {index}
              variants={cardVariants} 
              initial="initial" 
              animate = {isInView ? "animate" : "initial"} 
              transition={{duration : 0.5, delay : index * 0.4}}
              >
            <ProjectCard
                key={project.id}
                title= {project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl = {project.gitUrl}
                previewUrl = {project.previewUrl}
            />
            </motion.li>
            ))}
            </ul>
    </section>
  )
}

export default ProjectSection
