import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 p-8 '>        <h1 className='text-white'>Hi, I am</h1>
        <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>
            Sinnaththuraikalmarks Surenthiran
        </h1>
        <h1 className='text-5xl sm:text-2xl text-white font-semibold'>
            I build things for web
        </h1>
        <p className='text-white w-2/3'>
          I have recently completed my Higher National Diploma 
          (HND) in Computer Science and Engineering. I have a basic understanding of full stack 
          development, including React.js, Node.js, Express.js, and MongoDB. I am currently seeking an 
          internship opportunity where I can further develop my skills, learn from industry professionals,
          and contribute to innovative projects. My goal is to gain hands-on experience and enhance my 
          understanding of software development practices in a professional setting.
        </p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'> Get start</button>
    </div>
  )
}

export default Intro