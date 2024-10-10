import { cn } from '../lib/utils/cn'

const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        'bg-gradient-primary text-white py-4 px-[25px] rounded-full font-bold text-base font-nunito-sans leading-5',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
