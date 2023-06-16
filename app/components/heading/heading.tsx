import { Link } from '@remix-run/react'
import { motion, useReducedMotion } from 'framer-motion'
import { H1, H4, Paragraph } from '../typography'

const Heading = () => {
  const shouldReduceMotion = useReducedMotion()

  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  return (
    <div className="bg-[url('/images/hero-pattern-opacity.png')] bg-no-repeat bg-cover bg-center py-0 2xl:py-32">
      <div className='container'>
        <div className='grid grid-cols-2 place-items-center  text-center md:text-left'>
          <div className='col-span-2  md:col-span-1 order-2 md:order-1'>
            <motion.div
              initial='initial'
              animate='visible'
              variants={{
                initial: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.div variants={childVariants}>
                <H4 className='font-normal mb-12 text-white'>Programming Fundamentals</H4>
              </motion.div>
              <motion.div variants={childVariants}>
                <H1 className='bg-clip-text text-transparent bg-gradient-to-r from-white from-2% via-sky-400 via-20% to-blue-600 to-90%  text-5xl lg:text-6xl 2xl:text-7xl font-SpaceGroteskBold'>
                  Grab the Opportunity <br /> You Missed
                </H1>
              </motion.div>
              <motion.div variants={childVariants}>
                <Paragraph className='my-2 text-slate-50 mt-10'>
                  Join with us if you want to get a complete guidelines to become a <br /> skilled
                  junior programmer from scratch.
                </Paragraph>
              </motion.div>
              <motion.div variants={childVariants} className='buttons mt-6 md:flex items-center'>
                <Link
                  prefetch='intent'
                  to='/blog'
                  className='px-12 sm:px-12 py-3 md:py-3 sm:py-3  bg-sky-500 text-white rounded-full text-sm font-medium transition duration-200 inline-block my-4 mr-2'
                >
                  See Blogs
                </Link>
                <Link
                  prefetch='intent'
                  to='/problems'
                  className='px-12 sm:px-12 py-3 md:py-3 sm:py-3 text-white rounded-full text-sm font-medium transition duration-200 inline-block my-4 border border-white/30'
                >
                  Problems
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className='col-span-2 md:col-span-1 order-1 md:order-2 p-12'>
            <motion.img
              src='./images/programming.svg'
              height='400'
              width='600'
              alt='right-side-heading-img'
              className='ml-0 lg:ml-8'
              initial={{ scale: shouldReduceMotion ? 1 : 1.4 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
