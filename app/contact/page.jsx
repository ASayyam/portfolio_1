"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 336 558 2358",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "asmasayyam@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Islamabad, Pakistan",
  },
];

import {motion} from "framer-motion";

const Contact = () => {
  return <motion.section     initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"},
 }}
 className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:h-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let's work together</h3>
            <p className="text-white/60">
            Ready to transform your vision into a stunning, functional website? Whether you're looking to build a new site from scratch or revamp an existing one, our web development services are designed to bring your ideas to life. We specialize in creating responsive, user-friendly, and visually appealing websites tailored to meet your specific needs. Let's collaborate to elevate your online presence and achieve your digital goals.
            </p>
            <div className="grid grid-col-1 md:grid-col-2 gap-6">
              <Input type="firstname" placeholder="Firstname" />
              <Input type="lastname" placeholder="Lastname" />
              <Input type="email" placeholder="Email address" />
              <Input type="phone" placeholder="Phone number" />
            
            </div>
            <Select>
  <SelectTrigger className="w-full">
  <SelectValue placeholder= "Select a service"/>
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      
      <SelectItem value="est">Frontend development</SelectItem>
      <SelectItem value="cst">Backend development</SelectItem>
      <SelectItem value="mst">Fullstack development</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
<Textarea
className="h-[200px]"
  placeholder="Type your message here."
/>
<Button size="md" className="max-w-40">
Send message
</Button>
            </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
  <ul className="flex flex-col gap-6">
    {info.map((item, index) => {
      return (
        <li key={index} className="flex items-center gap-6">
          <div className="w-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center">
            <div className="text-[28px]">{item.icon}</div>
          </div>
          <div className="flex-1">
            <p className="text-white/60">{item.title}</p>
            <h3 className="text-xl">{item.description}</h3>
          </div>
        </li>
      )
    })}
  </ul>
</div>

      </div>
    </div>
    
    </motion.section>;
};

export default Contact;

  