import React from 'react'
import TextEffect from './TextEffect'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <div className='bg-blue-700 w-full h-full pt-[3.5rem]'>
      <div className='min-h-screenNav'>
        <div className='flex flex-col-reverse md:flex-row max-w-7xl mx-auto mt-6 md:mt-12'>
          {/* Left */}
          <div className=''>
            {/* Name */}
            <div className='text-2xl md:text-4xl font-extrabold absolute top-[1.25rem] left-0 flex md:hidden ml-4'>
                <TextEffect text={"J"}/>
                <TextEffect text={"P"}/>
            </div>
            <div className='text-2xl md:text-7xl font-extrabold w-full hidden md:block'>
                <TextEffect text={"James"}/>
                <TextEffect text={"Prentice"}/>
            </div>

            {/* Bio */}
            <div className='md:w-5/6 text-gray-100 bgred- py-5 px-6 md:mt-3 '>
              <p className='text-sm sm:text-xl md:text-xl'>
                I&apos;m an Enspiral Dev Academy graduate on a journey to becoming a professional 
                <span className="before:block before:absolute before:-inset-y-0 before:-inset-x-[.25rem] before:-skew-y-[0.8rem] mx-3 before:bg-white relative inline-block">
                  <span className='font-bold italic relative text-blue-700 '>full stack web developer.</span>
                </span>
                I have a keen interest in working with databases and transforming that data into an unforgettable user experience.
              </p>
              <div className='flex mt-8 md:mt-12 space-x-4'>
                <a style={{cursor: 'pointer'}} href="https://www.linkedin.com/in/jamesprenticez/?originalSubdomain=nz">
                  <GithubIcon />
                </a>

                <a href="https://www.linkedin.com/in/jamesprenticez/?originalSubdomain=nz">
                  <LinkedInIcon />
                </a>
              </div>

      
              <div className='py-2 md:py-4 mt-8 md:mt-12 block'>
                <a
                  role="button"
                  className='border rounded-md hover:bg-white hover:text-blue-700 text-white cursor-pointer p-3 md:p-4' 
                  href='/JPCV2022.pdf' 
                  download>
                    Download Resume
                </a>
              </div>
              
            </div>

          </div>
        
        {/* Image of Me */}
        {/* <div className="w-4/6 h-4/6 md:w-full md:h-full mx-auto">
          <div className="rounded-full"> 
            <img
              className="rounded-full bg-blue-600"
              src="/me.webp"
              alt="Me"
              width={1000}
              height={1000}
            />
          </div>
        </div> */}

        </div>

       
    </div>
  </div>
  )
}

const GithubIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

const LinkedInIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"  fill="currentColor">
      <path fill="currentColor" fillRule="evenodd" d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"/>
    </svg>
  )
}