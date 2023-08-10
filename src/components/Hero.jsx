import { avatar } from '../assets';
import SkillIconsList from './SkillIconsList';

const Hero = () => {
  return (

    <>

      <div className="flex flex-col lg:flex-row justify-between align-middle w-full lg:mt-24 mt-16">

        <div className="fade-in-up flex align-center justify-center lg:justify-start w-full lg:w-3/5 font-poppins text-white font-bold text-center lg:text-left sm:text-5xl text-[1.5rem] leading-[3rem] md:leading-[5rem]">
          I’m a Front End Developer<br />
          who is obsessed with<br />
          “making things better”.
        </div>

        <div className="lg:w-2/5 w-full flex justify-center align-center lg:mt-0 mt-12">
          <img src={avatar} alt="Az Riz avatar" className="fade-in-up w-[150px] h-[220px] ml-6 lg:ml-0" />
        </div>

      </div>

      <div className="fade-in-down mt-12 lg:mt-48 text-xl md:text-xl tracking-wide">
        <p>Specialising in React JS, Typescript, Javascript ES6+, Tailwind CSS, SASS, and much more.</p>
      </div>

      <div className="fade-in-up mt-12">
        <SkillIconsList />
      </div>

    </>

  );
}
 
export default Hero;