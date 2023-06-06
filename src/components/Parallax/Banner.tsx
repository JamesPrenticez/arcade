import Typewriter from 'typewriter-effect'
import TextEffect from '../common/TextEffect';
// https://www.npmjs.com/package/typewriter-effect 
function Banner() {
  return (

      <div className='text-gray-50 space-y-2 w-full'>
        <h1 className="text-3xl md:text-4xl lg:text-7xl ">
          {/* <span className='font-bold'>James Prentice </span> */}
          <span className='inline-block mr-4'>
            <TextEffect text="James Prentice" color1='rgb(249 250 251)' color2='#356a8b' />
          </span>
          {"("}
          <span className="inline-flex px-[1px] text-blue-500">
            <Typewriter
                onInit={(typewriter) => {
                  typewriter
                  .typeString('<span style="color: #38bdf8;">frontend</span>')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('<span style="color: #22c55e;">backend</span>')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('<span style="color: #d946ef;">design</span>')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('<span style="color: rgb(253 224 71);">teamwork</span>')
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
            />
          </span>
          {")"}
        </h1>
        <h2 className='text-[1.5rem] text-gray-400'>Rare mix of developer with a commitment to beautiful interfaces and user experiance</h2>
      </div>

  )
}

export default Banner;