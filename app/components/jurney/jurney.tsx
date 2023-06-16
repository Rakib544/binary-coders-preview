import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
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
        <div className='container'>
          <motion.div
            className='mx-auto w-11/12 mt-24 md:mb-16 md:mt-32 '
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className='font-SpaceGroteskBold text-5xl leading-[4.2rem]'>
                {`>`}_ Academy.py at a glance <br />
                Let's have a look. How exciting its <br /> journey going to be
              </h2>
            </div>
          </motion.div>

          <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12'>
              <div className='visionglance visionGlance-1 cursor-pointer  hover:bg-slate-900 flex items-center px-5 py-6 border border-slate-600/40 rounded-full group transition-all  hover:border-lime-800'>
                <button className='w-12 h-12  rounded-full grid place-items-center bg-slate-800 group-hover:ring-1 transition-all group-hover:shadow-[0px_0px_15px] group-hover:ring-lime-500 group-hover:shadow-lime-500/40 mr-2'>
                  <Info strokeWidth={0.75} />
                </button>
                <p>Installation editor tools & environment setup </p>
              </div>
              <div className='visionglance  visionGlance-1 cursor-pointer  hover:bg-slate-900 flex items-center px-5 py-6 border border-slate-600/40 rounded-full group transition-all  hover:border-lime-800'>
                <button className='w-12 h-12  rounded-full grid place-items-center bg-slate-800 group-hover:ring-1 transition-all group-hover:shadow-[0px_0px_15px] group-hover:ring-lime-500 group-hover:shadow-lime-500/40 mr-3'>
                  <Info strokeWidth={0.75} />
                </button>
                <p>Installation editor tools & environment setup </p>
              </div>
              <div className='visionglance   cursor-pointer  hover:bg-slate-900 flex items-center px-5 py-6 border border-slate-600/40 rounded-full group transition-all  hover:border-lime-800'>
                <button className='w-12 h-12  rounded-full grid place-items-center bg-slate-800 group-hover:ring-1 transition-all group-hover:shadow-[0px_0px_15px] group-hover:ring-lime-500 group-hover:shadow-lime-500/40 mr-3'>
                  <Info strokeWidth={0.75} />
                </button>
                <p>Installation editor tools & environment setup </p>
              </div>
              <div className='visionglance  visionGlance-1  cursor-pointer  hover:bg-slate-900 flex items-center px-5 py-6 border border-slate-600/40 rounded-full group transition-all  hover:border-lime-800'>
                <button className='w-12 h-12  rounded-full grid place-items-center bg-slate-800 group-hover:ring-1 transition-all group-hover:shadow-[0px_0px_15px] group-hover:ring-lime-500 group-hover:shadow-lime-500/40 mr-3'>
                  <Info strokeWidth={0.75} />
                </button>
                <p>Installation editor tools & environment setup </p>
              </div>
              <div className='visionglance  visionGlance-1 cursor-pointer  hover:bg-slate-900 flex items-center px-5 py-6 border border-slate-600/40 rounded-full group transition-all  hover:border-lime-800'>
                <button className='w-12 h-12  rounded-full grid place-items-center bg-slate-800 group-hover:ring-1 transition-all group-hover:shadow-[0px_0px_15px] group-hover:ring-lime-500 group-hover:shadow-lime-500/40 mr-3'>
                  <Info strokeWidth={0.75} />
                </button>
                <p>Installation editor tools & environment setup </p>
              </div>
              <div className=' visionglance   visionGlance-2 cursor-pointer  hover:bg-slate-900 flex items-center px-5 py-6 border border-slate-600/40 rounded-full group transition-all  hover:border-lime-800'>
                <button className='w-12 h-12  rounded-full grid place-items-center bg-slate-800 group-hover:ring-1 transition-all group-hover:shadow-[0px_0px_15px] group-hover:ring-lime-500 group-hover:shadow-lime-500/40 mr-3'>
                  <Info strokeWidth={0.75} />
                </button>
                <p>Installation editor tools & environment setup </p>
              </div>
              <div className='visionglance visionGlance-1 visionGlance-3   cursor-pointer  hover:bg-slate-900 flex items-center px-5 py-6 border border-slate-600/40 rounded-full group transition-all  hover:border-lime-800'>
                <button className='w-12 h-12  rounded-full grid place-items-center bg-slate-800 group-hover:ring-1 transition-all group-hover:shadow-[0px_0px_15px] group-hover:ring-lime-500 group-hover:shadow-lime-500/40 mr-2'>
                  <Info strokeWidth={0.75} />
                </button>
                <p>Installation editor tools & environment setup </p>
              </div>
              <div className='visionglance visionGlance-1  cursor-pointer  hover:bg-slate-900 flex items-center px-5 py-6 border border-slate-600/40 rounded-full group transition-all  hover:border-lime-800'>
                <button className='w-12 h-12  rounded-full grid place-items-center bg-slate-800 group-hover:ring-1 transition-all group-hover:shadow-[0px_0px_15px] group-hover:ring-lime-500 group-hover:shadow-lime-500/40 mr-3'>
                  <Info strokeWidth={0.75} />
                </button>
                <p>Installation editor tools & environment setup </p>
              </div>
              <div className='visionglance  cursor-pointer  hover:bg-slate-900 flex items-center px-5 py-6 border border-slate-600/40 rounded-full group transition-all  hover:border-lime-800'>
                <button className='w-12 h-12  rounded-full grid place-items-center bg-slate-800 group-hover:ring-1 transition-all group-hover:shadow-[0px_0px_15px] group-hover:ring-lime-500 group-hover:shadow-lime-500/40 mr-3'>
                  <Info strokeWidth={0.75} />
                </button>
                <p>Installation editor tools & environment setup </p>
              </div>
            </div>
          </div>
        </div>
        <Vision />
      </div>
    </>
  )
}

export default Jurney
