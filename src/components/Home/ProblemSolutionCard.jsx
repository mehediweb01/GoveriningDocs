import { cn } from '../lib/utils/cn'

const ProblemSolutionCard = ({ img, title, des1, des2, onClick, isActive }) => {
  return (
    <>
      <button type="button" className="text-start" onClick={onClick}>
        <div
          className={cn(
            'w-[272px] h-[349px] flex gap-3 flex-col shadow-lg p-5 hover:bg-gradient-primary group hover:cursor-pointer transition-all duration-300 rounded-20',
            isActive && 'bg-gradient-primary'
          )}
        >
          <div className="flex flex-col gap-3">
            <div className="space-y-3">
              <img
                src={img}
                alt={title}
                className="bg-gradient-primary rounded-full h-[58px] w-[58px]"
              />
              <h3
                className={cn(
                  'group-hover:text-white text-secondary font-bold font-nunito-sans text-[18px] leading-6',
                  isActive && 'text-white'
                )}
              >
                {title}
              </h3>
            </div>
            <div className="space-y-3">
              <p
                className={cn(
                  'group-hover:text-white text-accent',
                  isActive && 'text-white'
                )}
              >
                {des1}
              </p>
              {des2 && (
                <p
                  className={cn(
                    'group-hover:text-white text-accent',
                    isActive && 'text-white'
                  )}
                >
                  {des2}
                </p>
              )}
            </div>
          </div>
        </div>
      </button>
    </>
  )
}

export default ProblemSolutionCard
