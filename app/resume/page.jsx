"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodejs,
  FaDocker,
  FaPython,
  FaDatabase,
  FaJava,

  } from "react-icons/fa";

    
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I am an honest and a hardworking person.",
    info: [
{
fieldNAme: "Name",
fileValue: "Asma Sayyam"
},
{
fieldNAme: "Phone",
fileValue: "+92 336-5582358"
  },
  {
    fieldNAme: "Experience",
    fileValue: "1 year"
    },
    
      {
        fieldNAme: "Nationality",
        fileValue: "Pakistani"
        },
        {
          fieldNAme: "Email",
          fileValue: "asmasayyam@gmail.com"
          },
          {
            fieldNAme: "Freelance",
            fileValue: "Available"
            },
            {
              fieldNAme: "Language",
              fileValue: "Urdu, English"
              },
    ]
}


const experience = {
icon: '/assets/resume/..........',
title: 'My Experience',
// description:"Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
items: [
  {
    company: "Presidential Initiative for. Artificial Intelligence and Computing(PIAIC)",
    position: "Full_Stack_Developer",
    duration: "2023 - 2024",
  },
  {
    company: "Sitara School",

    position: "Programming Languages & Gen._AI Instructor",
    duration: "March 2024 till date",
  },
  {
    company: "Programming Lab. Pioneer and Maintainer at Sitara School and Teachers' Institute",
    position: "High School Principal.",
    duration: "2022-2023",
  },

]
}

const education = {
  // icon: '/assets/resume/filename',
  title: 'My Education',
  // description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  items: [
    {
      institution: "Presidential Initiative for Artificial Intelligence & Computing(PIAIC)",
      duration: "Certified Cloud Applied Generative AI Engineer (GenEng) 2023 - present"
    },
   
    {
      institution: "MPhil Science_Education",
      // position: "Python for Data Science, AI & Development",
      duration: "2024",
    },
  ]
  }

  const skills = {
    title:"My Skills",
    description:
    "I have experience in various technologies and methodologies, including TypeScript, Next.js, and Tailwind CSS for front-end development. My further expertise includes creating APIs using FastAPI, managing containers with Docker, and setting up development environments using dev containers. I am proficient in using Kong for API management and Kafka for real-time data processing. Additionally, I am comfortable in running multiple services, utilizing tools like Postman for API testing and PgAdmin for PostgreSQL database management. My knowledge extends to SQL and database design, specifically with PostgreSQL. I also cover cloud technologies, teaching how to work on Azure and use it to deploy microservices. Furthermore,I am comfortable in deploying projects on GitHub and applying design thinking principles. Lastly,  serverless computing and serverless containers to optimize application deployment and scalability is my area of expertise.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html",
    },
    {
      icon: <FaDocker/>,
      name: "Docker",
  },
  {
    icon: <FaPython/>,
    name: "Python",
  },
  {
    icon: <FaDatabase/>,
    name: "Database",
  },
  {
    icon: <FaJs/>,
    name: "Javascript",
  },
 
  {
    icon: <SiTailwindcss/>,
    name: "tailwindcss",

  },
  {
    icon: <SiNextdotjs/>,
    name: "next.js",
  },

  ]

  }

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";


const Resume = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1,
        transition:{delay: 2.4, duration: 0.4, ease:"easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
>
  <div className="container mx-auto">
    <Tabs 
    defaultValue="experience"
    className="flex flex-col xl:flex-row gap-[60px]"
    >
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
        <TabsTrigger value="experience" >Experience</TabsTrigger>
        <TabsTrigger value="education" >Education</TabsTrigger>
        <TabsTrigger value="skills" >Skills</TabsTrigger>
        <TabsTrigger value="about" >About me</TabsTrigger>
      </TabsList>
      <div className="min-h-[70vh] w-full">
        <TabsContent value="experience" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{experience.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">Experience.description</p>
        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 lg:grid-col-2 gap-[30px]">
            {experience.items.map((item, index) => {
              return (
              <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center item-center lg-items-start gap-1 ">
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px]
              text-center lg:text-left">{item.position}</h3>
              <div className="flex item-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.company}</p>
              </div>
              </li>
              )
})}
          </ul>
        </ScrollArea>
        </div>
        </TabsContent>

<TabsContent value="education" className="w-full">
<div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{education.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">Education.description</p>
        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 lg:grid-col-2 gap-[30px]">
            {education.items.map((item, index) => {
              return (
              <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center item-center lg-items-start gap-1 ">
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px]
              text-center lg:text-left">{item.degree}</h3>
              <div className="flex item-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.institution}</p>
              </div>
              </li>
              )
})}
          </ul>
        </ScrollArea>
        </div>
</TabsContent>

<TabsContent value="skills" className="w-full h-full">
  <div className="flex flex-col gap [30px]">
  <div className="flex flex-col gap [30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{skills.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
  </div>
  <ul className="grid grid-col-2 sm:grid-cols-3 md:grid-col-4 gap-4 xl:gap-[30px]">{skills.skillList.map((skill,index) => {
    return <li key={index}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center item-center group">
            <div className="text-6xl group-hover:text-accent transition-all duration-300">
               {skill.icon}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="capitalize">{skill.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      </li>
})}

  </ul>
  </div>
</TabsContent>

<TabsContent value="about" className="w-full text-center xl:text-left">
  <div className="flex flex-col gap-[30px]">
    <h3 className="text-4xl font-bold">{about.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
    <ul className="grid grid-col-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
      {about.info.map((item,index) =>{
        return (
          <li key={index} className="flex item-center justify-center
          xl:justify-start gap-4">
            <span className="text-white/60">{item.fieldName}</span>
            <span className="text-xl">{item.fieldValue}</span>
          </li>
        )
      }
    )}
    </ul>
  </div>
</TabsContent>

      </div>
    </Tabs>
  </div>
        </motion.div>
    )
    
  }
  
  export default Resume;
  

  // ============================

//   <li>Typescript</li>
//   <li>Next.js</li>
//   <li>Tailwind CSS</li>
//   <li>Python</li>
//   <li>How to make APIs using FastAPI</li>
//   <li>How to work with Docker</li>
//   <li>Dev containers</li>
//   <li>Kong</li>
//   <li>Kafka</li>
//   <li>How to run multiple services</li>
//   <li>Postman</li>
//   <li>PgAdmin</li>
//   <li>SQL</li>
//   <li>POstgresql</li>
//   <li>Database</li>
//   <li>How to work on Azure</li>
//   <li>How to use Azure to deploy microservices</li>
//   <li>How to deploy projects on GitHub</li>
//   <li>Design Thinking</li>
//   <li>Serverless and Serverless Containers</li>


             
// </ul>
// Related Projects:
// <li>Innitiated Programming Lab. for High School Students at Sitara School</li>
// <li>Online Imtiaz Mart</li>
//   <li>My Prtfolio</li>
//   <li>Github Profile</li>
//   <li>My Personal CV on Next.js, using HTML, Tailwind CSS and TypeScript </li>
//   <li>CLI Calculator using TypeScript</li>

  // =============================================