// import React from 'react'

// export default function Nav({skills, projects, hobbies}){
//   const executeScroll = (ref) => ref.current.scrollIntoView({behavior: "smooth"})  
//   return (
//     <nav className='absolute top-0 left-0 py-5 w-full text-base z-50 '>
//       <div className='flex items-center max-w-7xl mx-auto '>
//         <ul className='flex ml-auto mr-4 md:mr-0 space-x-4 cursor-pointer'>
//             <li onClick={() => executeScroll(skills)}>Skills</li>
//             <li onClick={() => executeScroll(projects)}>Projects</li>
//             <li onClick={() => executeScroll(hobbies)}>Hobbies</li>
//           </ul>
//       </div>
//     </nav>
//   )
// }

import React from 'react'

const Nav = () => {
  return (
    <div className=' w-full absolute top-0 z-50 flex items-center justify-end pr-8 pt-4 right-[18px]'>
<ul className='text-gray-100 text-2xl font-bold flex flex-col text-right space-x-3'>
  <li className='flex justify-end items-center'>
    <span>About</span>
    <div className='w-1 h-8 ml-3 bg-[#38bdf8] inline-block '></div>
  </li>
  <li className='flex justify-end items-center'>
    <span>Skills</span>
    <div className='w-1 h-8 ml-3 bg-gray-200/50 inline-block '></div>
  </li>
  <li className='flex justify-end items-center'>
    <span>Projects</span>
    <div className='w-1 h-8 ml-3 bg-gray-200/50 inline-block '></div>
  </li>
  <li className='flex justify-end items-center'>
    <span>Contact</span>
    <div className='w-1 h-8 ml-3 bg-gray-200/50 inline-block '></div>
  </li>
</ul>
    </div>
  )
}

export default Nav