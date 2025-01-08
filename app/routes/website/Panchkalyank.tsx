import React from 'react'

type Props = {}

const Panchkalyank = (_: Props) => {
  return (
    <div className="container mx-auto p-4">
      <img src="/images/guru.png" alt="Panchkalyank" className="mx-auto w-full" />
      <div className="flex flex-col items-center justify-center w-full max-w-[1200px] min-w-[240px] mx-auto py-16 px-2">

      <div className='space-y-4'>
      <h1 className='text-4xl text-center font-bold'>श्री 1008 श्रीमज्जिनेन्द्र आदिनाथ जिनबिंब पंचकल्याणक प्रतिष्ठा महामहोत्सव </h1>
      <h2 className='text-2xl text-center font-semibold'>15 जनवरी से 20 जनवरी 2025</h2>
      <p className='text-xl text-center font-semibold'>आदिनाथ धाम मंदिर, छिंदवाड़ा</p>
      </div>


      <div className="flex flex-wrap justify-center gap-4 mt-8  border-2 rounded-lg p-4  shadow-xl mb-4">
      <img src="/images/mini-banner.jpg" alt="Panchkalyank" className="mx-auto w-[80%]" />
      </div>

      <p className="mt-4 text-2xl leading-8 text-zinc-500 max-md:max-w-full">
        श्री 1008 श्रीमज्जिनेन्द्र आदिनाथ जिनबिंब पंचकल्याणक प्रतिष्ठा महामहोत्सव 2025 के अवसर पर आप सभी का हार्दिक स्वागत है। इस अवसर पर आप सभी को आदिनाथ धाम मंदिर में आमंत्रित किया जाता है। 
      </p>

      </div>


      <img src="/images/patra.jpg" alt="Panchkalyank Patra" className="mx-auto w-full" />
    </div>
  )
}

export default Panchkalyank