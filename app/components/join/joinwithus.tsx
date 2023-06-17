import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

const JoinWithUs = () => {
  return (
    <div className="my-32 container bg-[url('/images/registration-bg.svg')] ">
      <motion.div
        className='mx-auto w-11/12 mt-24 mb-5 md:mb-16 md:mt-32 '
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='font-SpaceGroteskBold text-3xl lg:text-5xl 2xl:text-5xl leading-[2.5rem] lg:leading-[4.2rem] mb-6 lg:mb-0 2xl:leading-[4.2rem] text-center'>
          {'>'}_ Join the{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-600 from-10% via-blue-400 via-50%  to-sky-400 to-40% text-bold font-SpaceGroteskBold'>
            <Link to={'/problems'}>Problem Solving Challenge</Link>
          </span>{' '}
          and <br /> test your skills in software development!
        </h2>
      </motion.div>

      <div>
        <ul className='space-y-5 max-w-2xl mx-auto text-left'>
          <li className='flex items-top'>
            {' '}
            <CheckCircle2 color='#1ac73c' strokeWidth={0.75} className='mr-3' />
            Sign up on Academy.py and get ready to solve the problem your knowledge!
          </li>
          <li className='flex items-top'>
            {' '}
            <CheckCircle2 color='#1ac73c' strokeWidth={0.75} className='mr-3' />
            Start reading python documentation, watch videos for develop your basic understanding in
            python.
          </li>
          <li className='flex items-top'>
            {' '}
            <CheckCircle2 color='#1ac73c' strokeWidth={0.75} className='mr-3' />
            Need practice? Go to our solve problems section to practice programs on that topic you
            read
          </li>
          <li className='flex items-top'>
            {' '}
            <CheckCircle2 color='#1ac73c' strokeWidth={0.75} className='mr-3' />
            Stuck in something? You can ask question on our forums and also can ask on our
            Academy-AI
          </li>
          <li className='flex items-top'>
            {' '}
            <CheckCircle2 color='#1ac73c' strokeWidth={0.75} className='mr-3' />
            Be productive and get a lots pro tips from our blogs.
          </li>
        </ul>

        <button className='px-4 py-2 rounded-full bg-gradient-to-r from-[#4BA2D3] to-[#7335FE] to-[99%] hover:scale-105 transition-all duration-500  mb-4  mx-auto w-fit block mt-10'>
          <Link to={'/problems'} className='flex items-center'>
            Purticipate Now <ArrowUpRight strokeWidth={0.75} className='ml-3' />
          </Link>
        </button>
      </div>
    </div>
  )
}

export default JoinWithUs
