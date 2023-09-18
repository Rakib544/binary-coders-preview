import { Link, useLocation } from '@remix-run/react'
import { headerNavLinks } from 'data/navbar'
import Dropdown from './dropdown'
import MobileNav from './mobile-nav'
import NotificationDropDown from './notification-dropdown'
import { H1 } from './typography'

const NAVBAR_HIDES_FROM = [
  '/auth/login',
  '/auth/register',
  '/auth/reset',
  '/auth/reset_password',
  '/auth/send-register-link',
]

const NavLink = ({ to, ...rest }: Omit<Parameters<typeof Link>['0'], 'to'> & { to: string }) => {
  const location = useLocation()

  const isSelected = to === location.pathname || location.pathname.startsWith(`${to}/`)

  return (
    <li className='px-5'>
      <Link
        prefetch='intent'
        className={`focus:outline-none block whitespace-nowrap text-md font-medium ${
          isSelected
            ? 'text-sky-500 underline decoration-2 decoration-sky-500 underline-offset-8'
            : 'text-slate-500'
        }`}
        to={to}
        {...rest}
      />
    </li>
  )
}

const Navbar = ({
  NOTIFICATION_SERVER_URL,
  fullName,
  username,
  profilePicture,
}: {
  NOTIFICATION_SERVER_URL: string
  fullName: string
  username: string
  profilePicture: string
}) => {
  const location = useLocation()
  const isNavbarHide = NAVBAR_HIDES_FROM.includes(location.pathname)

  return (
    <header className='bg-[#131425be] backdrop-blur-md sticky top-0 z-40 border-b-2 border-[#242764]'>
      <nav className='container '>
        {!isNavbarHide ? (
          <div className='flex items-center justify-between py-4 md:py-2 px-2 md:px-10'>
            <div className='flex items-center justify-between z-10 '>
              <Link prefetch='intent' to='/'>
                <H1 className='text-2xl lg:text-3xl 2xl:text-5xl font-SpaceGroteskLight text-white'>
                  {'>'}_academy.
                  <span className='font-SpaceGroteskBold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 from-30%  to-blue-600 to-55% text-4xl lg:text-5xl 2xl:text-7xl'>
                    py
                  </span>{' '}
                </H1>
              </Link>
            </div>
            <div className='block md:hidden'>
              <MobileNav
                fullName={fullName}
                profilePicture={profilePicture}
                username={username}
                NOTIFICATION_SERVER_URL={NOTIFICATION_SERVER_URL}
              />
            </div>
            <div className='hidden md:block'>
              <ul className='hidden flex-none md:flex items-center'>
                {headerNavLinks.map((link) => (
                  <NavLink key={link.href} to={link.href} prefetch='intent' className='text-white'>
                    {link.title}
                  </NavLink>
                ))}
                {username && (
                  <li>
                    <NotificationDropDown NOTIFICATION_SERVER_URL={NOTIFICATION_SERVER_URL} />
                  </li>
                )}
                {username ? (
                  <Dropdown
                    fullName={fullName}
                    username={username}
                    profilePicture={profilePicture}
                  />
                ) : (
                  <Link
                    to='/auth/login'
                    className='px-8 sm:px-12 py-2 sm:py-3  bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition duration-200 inline-block my-4'
                  >
                    Login
                  </Link>
                )}
              </ul>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default Navbar
