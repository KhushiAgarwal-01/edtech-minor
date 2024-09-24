import React from "react"
import aboutImg from "../components/assets/images/about.jpg"
import aboutImgBanner from "../components/assets/images/about-banner.jpg"
import imgs from "../components/assets/images/join1.png"
import { MdOutlinePaid } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { RiPresentationFill } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";

import { AiOutlineCheck } from "react-icons/ai"

export const About = () => {
  return (
    <>
      <section className='about py-16'>
        <div className='container'>
          <div className='heading text-center py-12'>
          <h1 className='text-3xl font-semibold text-red-500'>Why the student platform Out Of The Ordinary?</h1>

            <span className='text-white block'>we’re here to provide support and assistance every step of the way.</span>
          </div>
          <div className='grid grid-cols-4 gap-5 mt-5 md:grid-cols-2'>
            <AboutCard color='bg-[#2D69F0]' icon={< IoBookSharp size={50} />} title='10+ Online courses' desc="You don't have to struggle alone, you've " />
            <AboutCard color='bg-[#DD246E]' icon={<MdCastForEducation  size={50} />} title='Free courses' desc="enroll for free" />
            <AboutCard color='bg-[#8007E6]' icon={ <MdOutlinePaid size={50}/>} title='paid courses' desc="You don't have to struggle alone, you've " />
            <AboutCard color='bg-[#0CAE74]' icon={<RiPresentationFill size={50} />} title='interview prep' desc="You don't have to struggle alone, you've " />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  )
}
export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}>
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  )
}

export const AboutContent = () => {
  return (
    <section className='mb-16'>
      <div className='container flex md:flex-col'>
        <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
          <img src={aboutImg} alt='aboutImg' className=' rounded-xl' />
          <img src={aboutImgBanner} alt='aboutImg' className='rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80' />
          <div className='img-group ml-24 mt-3'>
            <img src={imgs} alt='' />
            <span className='text-[14px]'>
              Join over <label className='text-black text-sm'>4,000+</label> students
            </span>
          </div>
        </div>
        <div className='right w-2/3 md:w-full md:mt-16'>
          <div className='heading w-4/5 md:w-full'>
            <h1 className='text-3xl font-semibold text-red-500'>Achieve Your Goals With Educal</h1>
            <span className='text-white block leading-6'> Learn and grow in your professional and personal life with our flexible training modes. Our effective interactive online live training is conducted by qualified trainers in instructor-led virtual classrooms. We emphasize collaboration and real-time learning, ensuring you engage with subject experts during interactive classroom sessions. Note that we do not offer recorded videos; instead, we believe in learning while collaborating ideas with our trainers.</span>
            <ul className='my-5'>
              <li className='text-white flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' /> Flexible Training Modes
              </li>
              <li className='text-white flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-green-500' />
                Interactive Live Training:
              </li>
              <li className='text-white flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' />
                Comprehensive Solutions
              </li>
            </ul>
            <button className='px-5 py-2 border border-gray-300 rounded-md text-white'>Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}
