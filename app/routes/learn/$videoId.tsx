import { Disclosure } from '@headlessui/react'
import { moduleData } from 'data/module-data'

export default function Learn() {
  return (
    <div className='grid grid-cols-12 px-4 md:px-12 max-w-screen-xl w-full mx-auto gap-5'>
      <div className='col-span-12 lg:col-span-8'>
        <div className='aspect-w-16 aspect-h-9'>
          <iframe
            src='https://www.youtube.com/embed/dQw4w9WgXcQ'
            frameBorder='0'
            className='rounded'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className='col-span-12 lg:col-span-4 h-[500px] overflow-y-auto'>
        {moduleData.data.map((module) => (
          <div key={module._id} className='mb-3 text-left'>
            <Disclosure
              as='div'
              className='w-full border-none rounded-md  bg-gray-100 px-4 py-4  text-left'
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
                        <path d='M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z'></path>
                      </svg>
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    {module.modules.map((data) => (
                      <Disclosure key={data._id}>
                        {({ open: nestedOpen }) => (
                          <>
                            <Disclosure.Button
                              value={data.name}
                              className='border-none w-full flex justify-between items-top rounded-md  pl-3 py-1  text-left'
                            >
                              <span>{data.name}</span>
                              <span
                                className={`${
                                  nestedOpen ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-purple-500 shrink-0`}
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 24 24'
                                  className='h-5 w-5'
                                >
                                  <path d='M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z'></path>
                                </svg>
                              </span>
                            </Disclosure.Button>
                            <Disclosure.Panel className='px-4'>
                              Yes. It adheres to the WAI-ARIA design pattern.
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
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
