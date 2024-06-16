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
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/images/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
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
    <section >
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
