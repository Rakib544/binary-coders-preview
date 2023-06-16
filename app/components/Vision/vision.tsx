import { blurImgUrl } from 'data/blur-img-url'
import { stackCard } from 'data/navbar'
import { motion } from 'framer-motion'
import BlurrableImage from '../blurable-img'
const Vision = () => {
  return (
    <div className='container'>
      <div className='px-4 md:px-12 mt-32'>
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
        <div className='grid gap-4 md:gap-8 grid-cols-3 items-center p-3 mt-10'>
          {stackCard.map((stack) => (
            <div
              key={stack.id}
              className='col-span-3 md:col-span-1 bg-white shadow-2xl shadow-blue-500/10 rounded-lg h-full'
            >
              <div className='p-8'>
                <BlurrableImage
                  blurDataURl={blurImgUrl}
                  className='h-40 w-60 mx-auto relative'
                  img={
                    <img
                      src={stack.cardImg}
                      loading='lazy'
                      height='400'
                      width='400'
                      className='mx-auto h-40 w-auto'
                      alt='card-img'
                    />
                  }
                />
              </div>
              <div className='px-4'>
                <h2 className='text-center font-bold mt-4 text-sky-500 '>{stack.stackName}</h2>
                <p className='text-slate-500 tracking-normal mt-3 mb-5 text-justify '>
                  {stack.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Vision
