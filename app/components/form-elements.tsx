export const Label = ({ htmlFor, className = '', ...props }: JSX.IntrinsicElements['label']) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white my-1 ${className}`}
      {...props}
    />
  )
}

export const Input = ({ type, name, className = '', ...props }: JSX.IntrinsicElements['input']) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className={`px-6 py-3 w-full bg-[#111121] text-white hover:ring-1 transition duration-75 focus:ring-1 focus:outline-none ring-1 ring-slate-200 focus:ring-blue-500 rounded-lg placeholder:bg-[#111121] placeholder:text-white ${
        className ? className : ''
      }`}
      {...props}
    />
  )
}
