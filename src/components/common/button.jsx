import { cn } from '../lib/utils/cn'

const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        'bg-gradient-primary text-white lg:py-4 md:py-2 py-1 lg:px-[25px] md:px-[16px] px-[8px] rounded-full font-bold text-base font-nunito-sans lg:leading-5 leading-3',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
