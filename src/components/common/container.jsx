import { cn } from './../lib/utils/cn'
const Container = ({ children, className }) => {
  return (
    <>
      <div className={cn('w-full max-w-screen-xl mx-auto p-2.5', className)}>
        {children}
      </div>
    </>
  )
}

export default Container
