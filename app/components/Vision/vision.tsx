import { motion } from 'framer-motion'
const Vision = () => {
  return (
    <div className='container '>
      <div className='px-4 md:px-12 mt-32'>
        <motion.div
          className='mx-auto w-11/12 mt-24 md:mb-16 md:mt-32 '
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className='Title'>
            <h2 className='font-SpaceGroteskBold text-5xl leading-[4.2rem] '>
              Our vision is to update you <br /> with international standard Python knowledge
            </h2>
          </div>
        </motion.div>
        <div>
          <div className=' text-center mb-6'>
            <span className='py-2 from-[#D99BFF] from-[18%] to-[#D99BFF]/70 bg-gradient-to-l text-dark text-xl transition-all duration-400 hover:scale-105 cursor-pointer px-4'>
              Developer Guidance
            </span>
          </div>
          <div className='grid grid-cols-2 gap-x-10 gap-y-5  pb-10 pt-10  overflow-hidden relative'>
            <div className='border-[#404041a4] border rounded-lg   md:pt-6 md:pb-8  card-side-border'>
              <div className='py-8 px-5 rounded-lg flex space-x-5 items-center h-full'>
                <img
                  alt=''
                  loading='lazy'
                  width='72'
                  height='46'
                  decoding='async'
                  data-nimg='1'
                  className='w-[72px]'
                  src='images/guidance-icon-1.svg'
                />
                <p className='text-text'>
                  Connect with peers, industry experts, and potential employers to expand their
                  network.
                </p>
              </div>
            </div>
            <div className='border-[#404041a4] border md:pt-6 md:pb-8  rounded-lg'>
              <div className='py-8 px-5 rounded-lg flex space-x-5 items-center h-full'>
                <img
                  alt=''
                  loading='lazy'
                  width='72'
                  height='46'
                  decoding='async'
                  data-nimg='1'
                  className='w-[72px]'
                  src='images/guidance-icon-2.svg'
                />
                <p className='text-text'>
                  Expert-led sessions to guide them through the maze of development challenges.
                </p>
              </div>
            </div>
          </div>

          <div className='my-3 hidden md:block ml-0 md:-ml-6'>
            <div className='flex items-center justify-center'>
              <span className='px-5 py-2 from-[#85B6FF] from-[18%] to-[#85B6FF]/70 bg-gradient-to-l text-dark text-xl transition-all duration-400 hover:scale-105 cursor-pointer'>
                Networking
              </span>
              <div className="px-16 lg:px-28 mx-3 after:content-[''] after:left-0 after:top-1/2 after:translate-y-1/2 after:-z-[1] after:bg-white after:h-1 after:w-full relative after:absolute">
                <h2 className='text-3xl font-SpaceGroteskLight text-white visionglance px-5 py-1'>
                  {'>'}_academy.
                  <span className='font-SpaceGroteskBold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 from-30%  to-blue-600 to-55%'>
                    py
                  </span>{' '}
                </h2>
              </div>
              <span className='px-5 py-2 from-[#FF9A62] from-[18%] to-[#FF9A62]/70 bg-gradient-to-l text-dark text-xl transition-all duration-400 hover:scale-105 cursor-pointer'>
                Learning
              </span>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-x-10 gap-y-5  overflow-hidden relative pb-10 pt-10 '>
            <div className='border-[#404041a4] border rounded-lg  md:pt-8 md:pb-6  card-side-border'>
              <div className='  py-8 px-5  flex space-x-5 items-center h-full'>
                <img
                  alt=''
                  loading='lazy'
                  width='72'
                  height='46'
                  decoding='async'
                  data-nimg='1'
                  className='w-[72px]'
                  src='images/guidance-icon-3.svg'
                />
                <p className='text-text'>
                  Join a supportive community of developers and collaborate on exciting projects.
                </p>
              </div>
            </div>
            <div className='border-[#404041a4] border rounded-lg  md:pt-8 md:pb-6 py-3'>
              <div className=''>
                <div className=' py-8 px-5 rounded-lg flex space-x-5 items-center h-full'>
                  <img
                    alt=''
                    loading='lazy'
                    width='72'
                    height='46'
                    decoding='async'
                    data-nimg='1'
                    className='w-[72px]'
                    src='images/guidance-icon-4.svg'
                  />
                  <p className='text-text'>
                    Acquire new skills and stay up-to-date with the latest trends in tech.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=' text-center mt-6'>
            <span className='px-6 py-2 from-[#FFD233] from-[18%] to-[#FFD233]/70 bg-gradient-to-l   transition-all duration-400 hover:scale-105 cursor-pointer'>
              Community
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision
