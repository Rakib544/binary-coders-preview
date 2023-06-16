import { Link, useLocation } from '@remix-run/react'
import { H1 } from '../typography'
const FOOTER_HIDES_FROM = [
  '/auth/login',
  '/auth/register',
  '/auth/reset',
  '/auth/reset_password',
  '/auth/send-register-link',
]

const Footer = () => {
  const location = useLocation()

  const isFooterHide =
    location.pathname.startsWith('/python') || FOOTER_HIDES_FROM.includes(location.pathname)

  return (
    <>
      <hr className='border-[#404041a4] border-t' />
      <footer className={`${isFooterHide ? 'hidden' : ''} container py-16 text-white`}>
        <div className='flex items-center justify-between z-10'>
          <Link prefetch='intent' to='/'>
            <H1 className='text-4xl font-SpaceGroteskLight text-white'>
              {'>'}_academy.
              <span className='font-SpaceGroteskBold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 from-30%  to-blue-600 to-55% text-5xl'>
                py
              </span>{' '}
            </H1>
          </Link>
        </div>
        <div className='mt-5 mb-10'>
          <p>
            © 2023 academy.py. A big shoutout to{' '}
            <a href='https://github.com/rakib544' target='_blank' className='underline italic'>
              Rakib
            </a>{' '}
            and academy.py team for creating our logo and crafting this web template.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
