import React from 'react'

import { fetchYouTubeVideos, type YTVideo } from 'services/youtubeService';
import type { Route } from './+types/Videos';

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Videos" },
    { name: "description", content: "Get the latest updates." },
  ];
}

export async function clientLoader(_: Route.ClientLoaderArgs) {

  const product = await fetchYouTubeVideos('AIzaSyBnQLHNP9JSOvjjg2BvKhld2LA_o6EhfhI', 'UCL2eK8NYal7AwhBXhnnBAwA');
  return product;
}


const Videos = ({ loaderData }: Route.ComponentProps) => {
  const data = loaderData as unknown as YTVideo[]
  console.log(data)
  return (
    <div>
      <section className='container mx-auto px-5 py-10'>
        <div className="py-5 text-center">
          <h2 className='text-4xl font-bold'>Videos</h2>
          <p className='text-lg'>Get the latest updates.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          {data?.map((data: YTVideo) => (
            <VideoCard key={data.id} data={data} />
          ))}

        </div>
      </section>
    </div>
  )
}

export default Videos

type VideoCardProps = {
  data: YTVideo
}

function VideoCard({ data }: VideoCardProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${data.id}`} title={data.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <h3 className='text-lg'>{data.title}</h3>
    </div>
  )
}