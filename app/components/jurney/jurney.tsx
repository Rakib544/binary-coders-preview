/* eslint-disable quotes */
import { vision } from 'data/vision'
import { motion } from 'framer-motion'
import Vision from '../Vision/vision'

const Jurney = () => {
  return (
    <>
      <div
        className='relative bg-cover'
        style={{
          backgroundImage: "url('/images/star-bg.svg')",
        }}
      >
        <div className='container mt-20'>
          <motion.div
            className='w-11/12 mt-24 md:mb-16 md:mt-32 '
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className='font-SpaceGroteskBold text-3xl lg:text-5xl 2xl:text-5xl leading-[2.5rem] lg:leading-[4.2rem] mb-6 lg:mb-0 2xl:leading-[4.2rem]'>
                {`>`}_ Academy.py at a glance <br />
                Let&apos;s have a look. How exciting its <br /> journey going to be
              </h2>
            </div>
          </motion.div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            {vision.map((item, i) => (
              <div
                key={i}
                className={`hover:bg-slate-900 flex items-center gap-4 px-3 py-2 border border-slate-600/40 rounded-full group transition-all cursor-pointer ${item.divClass}`}
              >
                <div
                  className={`${item.btnColorShadow} w-12 h-12 mx-auto rounded-full grid place-items-center bg-slate-800 group-hover:ring-1 transition-all group-hover:shadow-[0px_0px_15px]`}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                    ></path>
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-sm font-medium'>{item.title}</h3>
                  <p className='w-3/4 md:w-full text-sm text-slate-400/70'>21 May to 27 May</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=''>
          <Vision />
        </div>
      </div>
    </>
  )
}

export default Jurney
