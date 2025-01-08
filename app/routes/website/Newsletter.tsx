import React from 'react'
import type { Newsletter } from 'types/Newsletter'
import type { Route } from './+types/Newsletter';
import newsletterService from 'services/newsletterService';

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Newsletter" },
    { name: "description", content: "Get the latest updates." },
  ];
}

export async function clientLoader(_: Route.ClientLoaderArgs) {

  const product = await newsletterService.list();
  return product;
}


const Newsletter = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div id="newsletter">
      <section className='container mx-auto px-5 py-10'>
        <div className="py-5 text-center">
          <h2 className='text-4xl font-bold'>Our Newsletter</h2>
          <p className='text-lg'>Get the latest updates.</p>
        </div>

        {/* <div className="flex flex-col md:flex-row items-center justify-center">
          <input type="email" placeholder="Email Address" className='border-2 border-gray-200 rounded-lg p-2 w-full md:w-96' />
          <button className='bg-blue-500 text-white rounded-lg p-2 mt-2 md:mt-0 md:ml-2'>Subscribe</button>
        </div> */}


        <div className="grid grid-cols-1 gap-4 mt-8">

          {loaderData.map((data: Newsletter) => (
            <NewsCard key={data.id} data={data} />
          ))}

        </div>


      </section>

    </div>
  )
}

export default Newsletter

type NewsCardProps = {
  data: Newsletter
}

function NewsCard({ data }: NewsCardProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="flex items-center">
        <span className='mr-2'>
          {data.date} :
        </span>
        <h3 className='text-xl font-bold'>{data.title}</h3>
      </div>
      <p className='p-2 whitespace-pre-wrap'
      >{data.description}</p>
    </div>
  )
}