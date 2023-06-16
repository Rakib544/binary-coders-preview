import { MetaFunction } from '@remix-run/node'
import JoinWithUs from '~/components/join/joinwithus'
import Heading from '../components/heading/heading'
import Jurney from '../components/jurney/jurney'

export const meta: MetaFunction = () => {
  return {
    title: 'Binary Coders',
    description: 'A platform for teaching programming fundamentals to programmers',
    'og:title': 'Binary Coders',
    'og:type': 'website',
    'og:url': 'https://binary-coders.vercel.app',
    'og:description': 'A platform for teaching programming fundamentals to programmers',
    'og:image': 'https://i.ibb.co/P69y7fJ/thumbnail.png',
  }
}

export function links() {
  return [
    {
      rel: 'preload',
      href: '/images/programming.svg',
      as: 'image',
    },
    {
      rel: 'preload',
      href: '/images/logo.webp',
      as: 'image',
    },
  ]
}
export default function Index() {
  return (
    <main className='text-white'>
      <Heading />
      <Jurney />
      <JoinWithUs />
    </main>
  )
}

export function ErrorBoundary() {
  return (
    <div className='justify-center h-96 flex items-center'>
      <div className='text-center'>
        {' '}
        <h1 className='text-3xl font-medium'>Ooops.</h1>
        <p>Something unexpected went wrong. Sorry about that.</p>
        <button
          className='px-8 sm:px-12 py-2 sm:py-3  bg-blue-500 text-white rounded-lg text-sm font-medium shadow-lg hover:bg-blue-600 transition duration-200 shadow-blue-500/50 my-6'
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    </div>
  )
}
