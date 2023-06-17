import { MetaFunction } from '@remix-run/node'
import JoinWithUs from '~/components/join/joinwithus'
import Heading from '../components/heading/heading'
import Jurney from '../components/jurney/jurney'

import highlightCss from 'highlight.js/styles/atom-one-dark.css'

import quillCss from 'quill/dist/quill.snow.css'

export const meta: MetaFunction = () => {
  return {
    title: 'Academy.Py',
    description: 'A platform for teaching programming fundamentals to programmers',
    'og:title': 'Academy.Py',
    'og:type': 'website',
    'og:url': 'https://academy-py.vercel.app/',
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
    {
      rel: 'preload',
      as: 'script',
      href: 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js',
    },
    { rel: 'stylesheet', href: highlightCss },
    { rel: 'stylesheet', href: quillCss },
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
