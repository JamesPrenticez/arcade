import { useScroll, useSpring } from 'framer-motion';
import React, { RefObject } from 'react'

import "./styles.css";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

interface NavProps {
  containerRef: RefObject<any>;
}

const Nav = ({containerRef}: NavProps) => {

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className=' w-full absolute top-0 z-50 flex items-center justify-end pr-8 pt-4 right-[18px]'>
<ul className='text-gray-100 text-2xl font-bold flex flex-col text-right space-x-3 cursor-pointer'>
  <li className='flex justify-end items-center'>
    <span>About</span>
    <div className='w-1 h-8 ml-3 bg-[#38bdf8] inline-block '></div>
  </li>
  <li className='flex justify-end items-center hover:text-gray-300'  onClick={() => scrollToSection("skillsSection")}>
    <span>Skills</span>
    <div className='w-1 h-8 ml-3 bg-gray-200/50 inline-block '></div>
  </li>
  <li className='flex justify-end items-center' onClick={() => { scrollToSection("projectsSection") }}>
    <span>Projects</span>
    <div className='w-1 h-8 ml-3 bg-gray-200/50 inline-block '></div>
  </li>
  <li className='flex justify-end items-center'>
    <span>Contact</span>
    <div className='w-1 h-8 ml-3 bg-gray-200/50 inline-block '></div>
  </li>
</ul>

<motion.div className="progress" style={{ scaleX }} />
    </div>

  )
}

export default Nav