import React from 'react'
import { NavLink } from 'react-router'

type Props = {}

const Panchkalyank = (_: Props) => {
  return (
    <div>
      <section className="container mx-auto p-4">
        {/* <img src="/images/guru.png" alt="Panchkalyank" className="mx-auto w-full" /> */}
        <div className='flex items-end justify-center w-full flex-wrap gap-8 mx-auto py-4 px-2 bg-[#fffce4]'>
          <img src='/images/sudha.png' alt='Panchkalyank' className='w-60 hidden lg:block' />
          <img src='/images/achayashree.png' alt='Panchkalyank' className='w-72' />
          <img src='/images/samay.png' alt='Panchkalyank' className='w-64' />
          <img src='/images/sudha.png' alt='Panchkalyank' className='w-64 lg:hidden' />
        
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-[1200px] min-w-[240px] mx-auto py-4 px-2">

          <div className='space-y-4'>
            <h1 className='text-4xl text-center font-extrabold text-green-700' style={{
              textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
            }}>श्री 1008 श्रीमज्जिनेन्द्र आदिनाथ जिनबिंब पंचकल्याणक प्रतिष्ठा महामहोत्सव </h1>
            <h2 className='text-2xl text-center font-semibold  '>15 जनवरी से 20 जनवरी 2025</h2>
            <p className='text-2xl text-center font-semibold text-pink-600'>आदिनाथ धाम मंदिर, छिंदवाड़ा</p>
          </div>


          <div className="flex flex-wrap justify-center gap-4 mt-8  border-2 rounded-lg p-4  shadow-xl mb-4">
            <img src="/images/mini-banner.jpg" alt="Panchkalyank" className="mx-auto w-[80%]" />
          </div>

          <p className="mt-4 text-2xl leading-8 text-center text-zinc-500 max-md:max-w-full">
            श्री 1008 श्रीमज्जिनेन्द्र आदिनाथ जिनबिंब पंचकल्याणक प्रतिष्ठा महामहोत्सव 2025 के अवसर पर आप सभी का हार्दिक स्वागत है। इस अवसर पर आप सभी को आदिनाथ धाम मंदिर में आमंत्रित किया जाता है।
          </p>
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-8 my-4">
        <NavLink to='/panchkalyank-patra' className="btn btn-lg !bg-yellow-400">प्रमुख पात्र</NavLink>
        <NavLink to='/panchkalyank-about' className=" bg-red-500 p-4  text-lg text-white rounded-lg" >
          पंचकल्याणक क्या है?
        </NavLink>
        <NavLink to='/panchkalyank-schedule' className="btn btn-lg !bg-yellow-400">
          कार्यक्रम सूची
        </NavLink>


      </div>
        <img src="/images/prasadsagar.jpg" alt="Panchkalyank" className="mx-auto aspect-auto lg:h-[80vh]" />



      <img src="/images/panchyakalvynak.jpg" alt="Panchkalyank" className="mx-auto w-full" />





      {/* <img src="/images/patra.jpg" alt="Panchkalyank Patra" className="mx-auto w-full" /> */}
    </div>
  )
}

export default Panchkalyank