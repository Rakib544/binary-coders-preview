import { Menu, Transition } from '@headlessui/react'
import { Link } from '@remix-run/react'
import { Fragment } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  url: string
  handleOpenModal: () => void
}

export default function MenuDropDown({ url, handleOpenModal }: Props) {
  return (
    <Menu as='div' className='relative inline-block text-left mx-2'>
      <div>
        <Menu.Button className='inline-flex justify-center w-full rounded-md border border-slate-600/40 px-2 py-1 text-sm font-medium text-white hover:bg-[#111121] bg-[#111121] focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-sky-500'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
            <path fill='none' d='M0 0h24v24H0z' />
            <path
              d='M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z'
              fill='#fff'
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#111121] text-white ring-1 ring-slate-600/40 ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <Link
                  prefetch='intent'
                  to={url}
                  className={classNames(
                    active ? 'bg-gray-800 text-white' : 'text-white',
                    'block px-4 py-2 text-sm',
                  )}
                >
                  Edit
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  onClick={handleOpenModal}
                  className={classNames(
                    active ? 'bg-gray-800 text-white' : 'text-white',
                    'block px-4 py-2 text-sm',
                  )}
                >
                  Delete
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
