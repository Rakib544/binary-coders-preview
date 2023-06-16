import { Disclosure } from '@headlessui/react'
import { LoaderFunction, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { moduleData, videoData } from 'data/module-data'
import { ArrowRight } from 'lucide-react'

export const loader: LoaderFunction = async ({ params }) => {
  const videoId = params.videoId
  const video = videoData[Number(videoId) - 1]
  return json(video)
}

export default function Learn() {
  const data = useLoaderData()
  const splitURL = data.video.split('/')
  const videoId = splitURL[splitURL.length - 1]
  return (
    <div className='grid grid-cols-12 px-4 md:px-12 max-w-screen-xl w-full mx-auto gap-5'>
      <div className='col-span-12 lg:col-span-8'>
        <h1 className='text-2xl font-bold text-white mb-4'>{data.name}</h1>
        <div className='aspect-w-16 aspect-h-9'>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder='0'
            className='rounded'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
        <div className='flex gap-x-2 justify-end'>
          {Number(data._id) <= 1 ? null : (
            <Link
              to={`/learn/${Number(data._id) - 1}`}
              className='px-12 sm:px-12 py-3 md:py-3 sm:py-3  bg-sky-500 text-white rounded-full text-sm font-medium transition duration-200 inline-block my-4 mr-2'
            >
              Previous
            </Link>
          )}
          {Number(data._id) >= 23 ? null : (
            <Link
              to={`/learn/${Number(data._id) + 1}`}
              className='px-12 sm:px-12 py-3 md:py-3 sm:py-3  bg-sky-500 text-white rounded-full text-sm font-medium transition duration-200 inline-block my-4 mr-2'
            >
              Next
            </Link>
          )}
        </div>
      </div>
      <div className='col-span-12 lg:col-span-4 h-[500px] overflow-y-auto custom-scroll'>
        {moduleData.data.map((module) => (
          <div key={module._id} className='mb-3 text-left'>
            <Disclosure
              as='div'
              className='w-full  rounded-md  bg-[#0F172A] text-slate-200 border border-slate-600/40 px-4 py-4  text-left'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    value={module.name}
                    className={`flex items-top justify-between w-full ${open ? 'mb-3' : ''}`}
                  >
                    <span>{module.name}</span>
                    <span
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500 shrink-0`}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        className='h-5 w-5'
                      >
                        <path
                          d='M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z'
                          fill='#fff'
                        ></path>
                      </svg>
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    {module.modules.map((data) => (
                      <Link
                        to={`/learn/${data._id}`}
                        key={data._id}
                        className='px-4 py-1  text-left flex gap-x-1 items-center group'
                      >
                        {data.name}{' '}
                        <span className='opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-1'>
                          <ArrowRight size={16} />
                        </span>
                      </Link>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  )
}
