import { blurImgUrl } from 'data/blur-img-url'
import { ABCData } from 'data/navbar'
import { motion } from 'framer-motion'
import BlurrableImage from '../blurable-img'

const OurVision = () => {
  return (
    <div className='my-32 container'>
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
      <div className='my-20 md:text-left text-center md:mx-28  grid grid-cols-3'>
        {ABCData.map((advantageBC) => (
          <div className='md:p-3.5 p-4 md:col-span-1 col-span-3' key={advantageBC.id}>
            <BlurrableImage
              blurDataURl={blurImgUrl}
              className='h-20 w-20 relative mx-auto md:mx-0'
              img={
                <img
                  className='w-20 h-20 md:m-0 m-auto'
                  loading='lazy'
                  src={advantageBC.img}
                  alt={advantageBC.img}
                />
              }
            />

            <h3 className='text-xl font-bold my-4 text-slate-700'>{advantageBC.title}</h3>
            <p className='text-slate-500'>{advantageBC.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurVision
