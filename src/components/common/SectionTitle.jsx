import { cn } from '../lib/utils/cn'
import GradientText from './GradientText';

const SectionTitle = ({ children,gradient, className }) => {
  return (
    <div>
          <h1 className={cn('font-space-grotesk font-bold lg:text-6xl md:text-4xl text-2xl lg:leading-[76px] leading-10 text-secondary', className)}>
              {children} <GradientText>{gradient}</GradientText>
          </h1>
    </div>
  )
}

export default SectionTitle
