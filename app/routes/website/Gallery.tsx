import React from 'react'
import type { Route } from './+types/Gallery';
import { imageUploadService } from 'services/imageUploadService';

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Videos" },
    { name: "description", content: "Get the latest updates." },
  ];
}

export async function clientLoader(_: Route.ClientLoaderArgs) {

  const product = await imageUploadService.list();
  return product;
}


const Gallery = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div>
      <section className='container mx-auto px-5 py-10'>
        <div className="py-5 text-center">
          <h2 className='text-4xl font-bold'>Gallery</h2>
          <p className='text-lg'>Get the latest photos.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          {loaderData.map((data: any) => (
            <ImageCard key={data.id} data={data} />
          ))}

        </div>
      </section>
    </div>
  )
}

export default Gallery

type ImageCardProps = {
  data: any
}

function ImageCard({ data }: ImageCardProps) {
  const url = `https://gkqujdsynxplbgsulaxn.supabase.co/storage/v1/object/public/${data.url}`
  return (
    <div className="bg-gray-100 p-4 rounded-lg ">
      <img className='w-full object-contain h-96'
      src={url} alt={data.title} onClick={() => window.open(url, '_blank')} />
      <h3 className='text-lg'>{data.title}</h3>
    </div>
  )
}