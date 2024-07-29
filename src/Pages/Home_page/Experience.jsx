import React from 'react'
import Sectiontitle from '../../Components/Sectiontitle'
import { experiences } from '../../experience/experience'


function Experience() {

  const [selectedItemIndex, setSelectedItemIndex] =React.useState(0);
  return (
    <div>
        <Sectiontitle title ="Experience"/>

        <div className='flex py-10 gap-20 sm:flex-col'>
          <div className='flex flex-col gap-10 border-1-2  w-1/5 sm:flex-row sm:overflow-scroll sm:w-full'>
            {experiences.map((experience, index) =>(
              <div onClick={() => {
                setSelectedItemIndex(index);
              }} className='cursor-pointer'
              >
                <h1 className={`text-xl ${selectedItemIndex === index 
                  ? 'text-tertiary border-tertiary border-1-4 -ml-[3px] bg-[#4debeb29] w-2/3 px-2' 
                  : 'text-white border-white'}`}
                >
                    {experience.period}
                </h1> 
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-secondary text-2xl'>
              {experiences[selectedItemIndex].title}
            </h1>
            <h1 className='text-tertiary text-xl'>
              {experiences[selectedItemIndex].company}
            </h1>
            <h1 className='text-white text-xl'>
              {experiences[selectedItemIndex].description}
            </h1>
          </div>
        </div>
    </div>
  )
}

export default Experience