import React from 'react'
import Sectiontitle from '../../Components/Sectiontitle';

function Contect() {
    const user ={
        Name: "Sinnnaththuraikalmarks Surenthiran",
        Age:22,
        Gender: "Male",
        Email:"kalmarkssurenthiran@gmail.com",
        Mobile: "0770362833",
        Country: "Sri Lanka",
    };
  return (
    <div>
        <Sectiontitle title = "Say Hello"/>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-2 mb-10'>
            {Object.keys(user).map((key) =>(
                <h1 className='ml-5'>
                    <span className='text-white'>{key}:</span>
                    <span className='text-white'>{user[key]}</span>
                </h1>
            ))}
            </div>
            <div className='h-[400px] ml-300px' >
            <lottie-player 
            src="https://lottie.host/de14af74-aa16-441e-a76b-b9de70be8f85/bdYRX8qAHW.json" 
            background="##FFFFFF" 
            speed="1" 
            loop  autoplay direction="1" 
            mode="normal"
            ></lottie-player>
            </div>
        </div>
    </div>
  )
}

export default Contect