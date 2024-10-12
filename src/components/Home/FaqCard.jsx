import { Arrow } from '../Icons'

const FaqCard = ({ question, ans, isActive, onClick }) => {
  return (
    <div className="max-w-[982px] border border-accent rounded-20 p-5 flex justify-between items-start mx-auto mt-8 hover:cursor-pointer">
      <button onClick={onClick} type="button" className='w-full inline-flex justify-between items-start text-start'>
        <div className="flex flex-col justify-between gap-1">
          <h1 className="font-nunito-sans font-bold text-secondary leading-9 md:text-xl lg:text-[26px]">
            {question}
          </h1>
          {isActive && (
            <p className="font-nunito-sans text-base text-accent leading-6 tracking-[2%] ms-2">
              <span className='font-bold font-space-grotesk'>Ans: </span>{ans}
            </p>
          )}
        </div>
        <Arrow
          className={
            isActive
              ? '-rotate-90 text-primary size-5 hover:cursor-pointer'
              : 'rotate-90 text-primary size-5 hover:cursor-pointer'
          }
        />
      </button>
    </div>
  )
}

export default FaqCard
