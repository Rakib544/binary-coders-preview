import { ActionFunction, json } from '@remix-run/node'
import { useFetcher } from '@remix-run/react'
import { blurImgUrl } from 'data/blur-img-url'
import { useEffect, useState } from 'react'
import BlurrableImage from '~/components/blurable-img'
import { getAiData } from '~/utils/open-ai.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const { value } = Object.fromEntries(formData)
  console.log(value)
  const result = await getAiData(value as string)

  console.log(result)

  return json(result)
}

export default function AskAI() {
  const [text, setText] = useState<string>('')
  const fetcher = useFetcher()
  const [questions, setQuestions] = useState<Array<{ question: string; answer: string }>>([])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function loadResponse(e: any) {
    e.preventDefault()
    fetcher.submit({ value: text }, { method: 'post' })
  }

  useEffect(() => {
    if (fetcher.data && text && fetcher.state === 'idle') {
      const newResponses = [...questions, { question: text, answer: fetcher?.data || '' }]
      const test = newResponses.map((data) => JSON.stringify(data))
      const intersectionData = [...new Set(test)]
      const uniqueData = intersectionData.map((data) => JSON.parse(data))
      setQuestions([...new Set(uniqueData)])
      setText('')
    }
  }, [fetcher])

  return (
    <div className='max-w-3xl px-4 mx-auto w-full text-slate-200'>
      {questions.map((data) => (
        <div className='my-8 ' key={data.answer}>
          <div className='flex gap-x-4 items-center rounded p-3 border bg-slate-900 border-slate-600/40'>
            <BlurrableImage
              blurDataURl={blurImgUrl}
              className='h-12 w-12 relative shrink-0'
              img={
                <img
                  src='https://i.ibb.co/s1Xp3yN/user.png'
                  alt=''
                  className='rounded-full h-12 w-12 object-cover shrink-0'
                />
              }
            />
            <p>{data.question}</p>
          </div>
          <div className='flex gap-x-3 items-top mt-3'>
            <BlurrableImage
              blurDataURl={blurImgUrl}
              className='h-16 w-16 relative shrink-0'
              img={
                <img
                  src='https://i.ibb.co/WpNQf9c/icons8-chatbot-64.png'
                  alt=''
                  className='rounded-full h-12 w-12 object-cover shrink-0'
                />
              }
            />
            <p>{data.answer}</p>
          </div>
        </div>
      ))}

      {fetcher.state !== 'idle' ? (
        <div className='my-8'>
          <div className='flex gap-x-4 items-center rounded p-3 border bg-slate-900 border-slate-600/40'>
            <BlurrableImage
              blurDataURl={blurImgUrl}
              className='h-12 w-12 relative shrink-0'
              img={
                <img
                  src='https://i.ibb.co/s1Xp3yN/user.png'
                  alt=''
                  className='rounded-full h-12 w-12 object-cover shrink-0'
                />
              }
            />
            <p>{text}</p>
          </div>
          <div className='flex gap-x-3 items-top mt-3'>
            <BlurrableImage
              blurDataURl={blurImgUrl}
              className='h-16 w-16 relative shrink-0'
              img={
                <img
                  src='https://i.ibb.co/WpNQf9c/icons8-chatbot-64.png'
                  alt=''
                  className='rounded-full h-12 w-12 object-cover shrink-0'
                />
              }
            />
            <p>......</p>
          </div>
        </div>
      ) : null}

      <div className='fixed inset-x-0 bottom-0 w-full pb-12 flex justify-center background-dark'>
        <form onSubmit={loadResponse} className='max-w-3xl w-full background-dark relative'>
          <input
            type='text'
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder='Write here'
            className='px-4 py-3 w-full rounded-md border border-slate-600/40 bg-[#111121]/70 focus:outline-none focus:border-slate-600/90'
          />
          <button type='submit' className='absolute right-0 bg-sky-500 h-full px-5 rounded-md'>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
