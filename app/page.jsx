import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";



const Home = () => {
  return ( 
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className=" flex flex-col xl:flex-row item-center justify-between xl:pt-8 xl:pb-24"> 
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Full Stack Web Developer</span>
<h1 className="h1 mt-5"  >
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=jetbrainsMono&size=37&duration=650&pause=1000&color=3EF775&random=false&width=505&lines=Hello+I'm+Asma+Sayyam" alt="Typing SVG" /></a>
</h1>
<p className="max-w-[500px] mb-9 text-white/80">
As a passionate full-stack web developer, I bring creativity, precision, and a commitment to excellence to every project I undertake. Whether it's designing intuitive user interfaces or architecting robust backend systems. My dedication to continuous learning and staying abreast of industry trends allows me to deliver solutions that not only meet but exceed client expectations. Let's collaborate to transform your vision into reality and elevate your digital presence.
</p>
<div className="flex flex-col xl:flex-row items-center gap-8">

  
  {/* <Button variant="outline" size="lg" className=" text-accent uppercase flex
  items-center gap-2 border" >
    <span >Download CV</span>
    <FiDownload className="text-xl"/>
  </Button> */}
  <a href="https://github.com/ASayyam/Asma_Sayyam_CV" download>
  <Button variant="outline" size="lg" className="text-accent uppercase flex items-center gap-2 border">
    <span>Download CV</span>
    <FiDownload className="text-xl"/>
  </Button>
</a>

  <div className="mb-8 xl:mb-0">
    <Social containerStyle="flex gap-6"
     iconStyles="w-9 border border-accent rounded-full flex 
    justify-center item-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>

  </div>
</div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo/>
        </div>
        </div>
      </div>
      <Stats/>
</section>
  );
};
export default Home

