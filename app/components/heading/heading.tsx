/* eslint-disable prettier/prettier */
import { Link } from '@remix-run/react'
import { motion, useReducedMotion } from 'framer-motion'
import { H1, H4, Paragraph } from '../typography'

const code = `<div class='h-6 border-b border-slate-600/40 -ml-4 w-[110%] pb-2'>
  <div class='flex gap-x-1 items-center pl-4 pb-2'>
  <div class='h-3 w-3 rounded-full bg-green-500'></div>
  <div class='h-3 w-3 rounded-full bg-yellow-500'></div>
  <div class='h-3 w-3 rounded-full bg-red-500'></div></div>
</div>
<pre class="ql-syntax" spellcheck="false"><span class="hljs-comment"># Binary Search in Python</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">binarySearch</span>(<span class="hljs-params">array, x, low, high</span>):</span>
    <span class="hljs-comment"># Repeat until the pointers low and high meet each other</span>
    <span class="hljs-keyword">while</span> low &lt;= high:
        mid = low + (high - low)//<span class="hljs-number">2</span>
        <span class="hljs-keyword">if</span> array[mid] == x:
            <span class="hljs-keyword">return</span> mid
        <span class="hljs-keyword">elif</span> array[mid] &lt; x:
            low = mid + <span class="hljs-number">1</span>
        <span class="hljs-keyword">else</span>:
            high = mid - <span class="hljs-number">1</span>
    <span class="hljs-keyword">return</span> -<span class="hljs-number">1</span>

array = [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>]
x = <span class="hljs-number">4</span>
result = binarySearch(array, x, <span class="hljs-number">0</span>, <span class="hljs-built_in">len</span>(array)-<span class="hljs-number">1</span>)

<span class="hljs-keyword">if</span> result != -<span class="hljs-number">1</span>:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">"Element is present at index "</span> + <span class="hljs-built_in">str</span>(result))
<span class="hljs-keyword">else</span>:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">"Not found"</span>)
</pre>
`

const Heading = () => {
  const shouldReduceMotion = useReducedMotion()

  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  return (
    <div className="bg-[url('/images/hero-pattern-opacity.png')] bg-no-repeat bg-cover bg-center py-0 2xl:py-32 relative overflow-hidden">
      <div className='absolute right-[28%] top-0 hidden h-[100px] w-[150px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]'></div>
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
            {/* <motion.img
              src='./images/programming.svg'
              height='400'
              width='600'
              alt='right-side-heading-img'
              className='ml-0 lg:ml-8'
              initial={{ scale: shouldReduceMotion ? 1 : 1.4 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            /> */}
            <div className=''>
              <code>
                <div
                  className='border border-slate-600/40 p-4 rounded-2xl overflow-hidden bg-[#1213247a] backdrop-blur-md text-xs sm:text-sm md:text-lg'
                  dangerouslySetInnerHTML={{ __html: code }}
                ></div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
