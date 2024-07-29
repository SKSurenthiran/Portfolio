import Sectiontitle from '../../Components/Sectiontitle'

const skills =[
    "JavaScript",
    "React js",
    "Node js",
    "Express js",
    "MongoDB",
    "Java",
    "Git",
    "GitHub",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "PHP"
]
function About() {

  return (
    <div>
        <Sectiontitle title= "About me"/>
        <div className="flex w-full items-center sm:flex-col">
            <div className='h-[60vh] w-1/2 sm:w-full'>
            <lottie-player
                src="https://lottie.host/162d52b4-a2eb-4e29-85f2-860d428e8b74/ezlKl4TRZm.json" 
                background="##fff" 
                speed="0.5" 
                loop autoplay direction="1">
            </lottie-player>
            </div>
            <div className='flex flex-col gap-5 w-2/3'>
            <p className='text-white'>
            I am SK. Surenthiran, a recent graduate with a Higher National Diploma (HND) 
            in Computer Science and Engineering from ICBT campus. With a solid foundation 
            in full stack development, I have hands-on experience with technologies such as 
            React.js, Node.js, Express.js, and MongoDB. I am passionate about building innovative
             and efficient web applications. Currently, I am seeking an internship opportunity to further
              develop my technical skills, collaborate with experienced professionals, and contribute to 
              meaningful projects. My goal is to gain practical experience, enhance my understanding of 
              software development practices, and make a positive impact in the tech industry.
            </p>
        </div>
        </div>
        
        <div className='py-5'>
            <h1 className='text-tertiary text-xl'>
            SKILLS
            </h1>
            <div className='flex flex-wrap gap-10 mt-5'>
                {skills.map((skill) =>(
                    <div className='border border-tertiary py-3 px-5 rounded-md'>
                        <h1 className='text-tertiary'>{skill}</h1>    
                     </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About