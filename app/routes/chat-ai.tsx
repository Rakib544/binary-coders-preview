export default function AskAI() {
  return (
    <div className='max-w-3xl px-4 mx-auto w-full'>
      {[...Array(100)].map((index) => (
        <p key={index}>Hello from ai</p>
      ))}
      <div className='fixed inset-x-0 bottom-0 w-full pb-12 flex justify-center bg-green-500'>
        <div className='max-w-3xl w-full'>
          <input
            type='text'
            placeholder='Write here'
            className='px-4 py-3 w-full rounded-md border'
          />
        </div>
      </div>
    </div>
  )
}
