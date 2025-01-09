import React from 'react'

type Props = {}

const PanchkalyankSchedule = (_props: Props) => {
  return (
    <div >
    <section className="container mx-auto p-4">
    <div className='space-y-4'>
      <h1 className='text-4xl text-center font-bold'>श्री 1008 श्रीमज्जिनेन्द्र आदिनाथ जिनबिंब पंचकल्याणक प्रतिष्ठा महामहोत्सव </h1>
      <h2 className='text-2xl text-center font-semibold'>15 जनवरी से 20 जनवरी 2025</h2>
      <p className='text-xl text-center font-semibold'>आदिनाथ धाम मंदिर, छिंदवाड़ा</p>
    </div>


    <div className="flex flex-wrap justify-center gap-4 mt-8  border-2 rounded-lg p-4  shadow-xl mb-4">
      <img src="/images/mini-banner.jpg" alt="Panchkalyank" className="mx-auto w-[80%]" />
    </div>

    <img src="/images/schedule1.jpg" alt="Panchkalyank Schedule" className="mx-auto w-full" />
    <img src="/images/schedule2.jpg" alt="Panchkalyank Schedule" className="mx-auto w-full" />
    <img src="/images/schedule3.jpg" alt="Panchkalyank Schedule" className="mx-auto w-full" />
    <img src="/images/schedule4.jpg" alt="Panchkalyank Schedule" className="mx-auto w-full" />
    <img src="/images/schedule5.jpg" alt="Panchkalyank Schedule" className="mx-auto w-full" />
    <img src="/images/schedule6.jpg" alt="Panchkalyank Schedule" className="mx-auto w-full" />

    </section>

    <img src="/images/panchyakalvynak.jpg" alt="Panchkalyank" className="mx-auto w-full" />

  </div>
  )
}

export default PanchkalyankSchedule