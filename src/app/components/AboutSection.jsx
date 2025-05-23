"use client";
import React, {useState,useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA= [
    {
        title : 'Skills',
        id : 'Skills',
        content : (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Flutter</li>
                <li>Python</li>
                <li>C/C++</li>
            </ul>
        )
    },
    {
        title : 'Education',
        id : 'Education',
        content : (
            <ul className='list-disc pl-2'>
                 <li>Birla Institute of Technology, Mesra</li>
                <li>Sarala Birla Public School (PCM + CS)</li>
            </ul>
        )
    },
    {
        title : 'Experience',
        id : 'Experience',
        content : (
            <ul className='list-disc pl-2'>
                <li>IIT Kgp (Research + Engineering Intern) </li>
                <li>Coding Ninjas - Competitive Programming Intern</li>
            </ul>
        ),
    },
];


const AboutSection = () => {
    const [tab, setTab] = useState('Skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <section className='text-white '>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src = "/images/cbse.jpg" alt="portfolio" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>
                    About Me
                </h2>
                <p className='text-base lg:text-lg'>
                Currently a 4th-year Information Technology major at BIT Mesra, I have interned at IIT Kharagpur and Coding Ninjas. As Vice President of the Society for Data Science, I actively explore new technologies and frameworks. I&apos;m also a national-level quizzer, having reached the National finals of the CBSE History TV18 Heritage India Quiz.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                    selectTab={() => handleTabChange('Skills')} 
                    active={tab === 'Skills'}
                > 
                {" "}
                Skills{" "}
                </TabButton>
                <TabButton 
                    selectTab={() => handleTabChange('Education')} 
                    active={tab === 'Education'}
                > 
                {" "}
                Education{" "}
                </TabButton>
                <TabButton 
                    selectTab={() => handleTabChange('Experience')} 
                    active={tab === 'Experience'}
                > 
                {" "}
                Experience{" "}
                </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((tabData) => tabData.id === tab).content}</div>
                
            </div>
        </div>
        </section>
  )
}

export default AboutSection
